'use strict';
const dom = require('../dom/code.js');
const list = require('code.js');
const google3 = require('google3');
const events_ELEMENTS_KEY_ALLOWED_IN = [
    'input',
    'button',
    'textarea',
    'select'
];
function typeahead_initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    const sortedIndexByFirstChar = new Map();
    for (let i = 0; i < listItemCount; i++) {
        const primaryText = getPrimaryTextByItemIndex(i).trim();
        if (!primaryText)
            continue;
        const firstChar = primaryText[0].toLowerCase();
        sortedIndexByFirstChar.has(firstChar) || sortedIndexByFirstChar.set(firstChar, []);
        sortedIndexByFirstChar.get(firstChar).push({
            text: primaryText.toLowerCase(),
            index: i
        });
    }
    sortedIndexByFirstChar.forEach(values => {
        values.sort((first, second) => first.index - second.index);
    });
    return sortedIndexByFirstChar;
}
function typeahead_matchItem(opts, state) {
    const nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(() => {
        state.typeaheadBuffer = '';
    }, google3.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer += nextChar;
    let index;
    index = 1 === state.typeaheadBuffer.length ? list.typeahead_matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) : list.typeahead_matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    -1 === index || skipFocus || focusItemAtIndex(index);
    return index;
}
function typeahead_matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    const firstChar = state.typeaheadBuffer[0], itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar)
        return -1;
    if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
        state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
        const newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
        if (!isItemAtIndexDisabled(newIndex))
            return newIndex;
    }
    state.currentFirstChar = firstChar;
    let newCursorPosition = -1, cursorPosition;
    for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++)
        if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++)
        if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    return -1 !== newCursorPosition ? (state.sortedIndexCursor = newCursorPosition, itemsMatchingFirstChar[state.sortedIndexCursor].index) : -1;
}
function typeahead_matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    const itemsMatchingFirstChar = sortedIndexByFirstChar.get(state.typeaheadBuffer[0]);
    if (!itemsMatchingFirstChar)
        return -1;
    const startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (0 === startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) && !isItemAtIndexDisabled(startingItem.index))
        return startingItem.index;
    let cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length, nextCursorPosition = -1;
    for (; cursorPosition !== state.sortedIndexCursor;) {
        const currentItem = itemsMatchingFirstChar[cursorPosition], matches = 0 === currentItem.text.lastIndexOf(state.typeaheadBuffer, 0), isEnabled = !isItemAtIndexDisabled(currentItem.index);
        if (matches && isEnabled) {
            nextCursorPosition = cursorPosition;
            break;
        }
        cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    return -1 !== nextCursorPosition ? (state.sortedIndexCursor = nextCursorPosition, itemsMatchingFirstChar[state.sortedIndexCursor].index) : -1;
}
function typeahead_handleKeydown(opts, state) {
    const event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled, isArrowLeft = 'ArrowLeft' === dom.keyboard_normalizeKey(event), isArrowUp = 'ArrowUp' === dom.keyboard_normalizeKey(event), isArrowRight = 'ArrowRight' === dom.keyboard_normalizeKey(event), isArrowDown = 'ArrowDown' === dom.keyboard_normalizeKey(event), isHome = 'Home' === dom.keyboard_normalizeKey(event), isEnd = 'End' === dom.keyboard_normalizeKey(event), isEnter = 'Enter' === dom.keyboard_normalizeKey(event), isSpace = 'Spacebar' === dom.keyboard_normalizeKey(event);
    event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter || (isSpace || 1 !== event.key.length ? isSpace && (isTargetListItem && google3.preventDefaultEvent(event), isTargetListItem && 0 < state.typeaheadBuffer.length && list.typeahead_matchItem({
        focusItemAtIndex,
        focusedItemIndex,
        nextChar: ' ',
        sortedIndexByFirstChar,
        skipFocus: !1,
        isItemAtIndexDisabled
    }, state)) : (google3.preventDefaultEvent(event), list.typeahead_matchItem({
        focusItemAtIndex,
        focusedItemIndex,
        nextChar: event.key.toLowerCase(),
        sortedIndexByFirstChar,
        skipFocus: !1,
        isItemAtIndexDisabled
    }, state)));
}