library libmonet.score;

import 'color.dart';
import 'hct/cam16.dart';
import 'libmonet.dart';
import 'math.dart';
import 'utils/color_utils.dart';
import 'utils/utils.dart';

typedef Score = double;
List<ARGBColor> score(Map<ARGBColor, int> colorsToPopulation) {
  int populationSum = 0;
  for (final population in colorsToPopulation.values)
    populationSum += population;
  final colorsToProportion = <ARGBColor, double>{},
      colorsToCam = <ARGBColor, CAM16>{},
      hueProportions = List.filled(360, 0.0);
  for (final e in colorsToPopulation.entries) {
    final color__tsickle_destructured_1 = e.key,
        population__tsickle_destructured_2 = e.value;
    final color = color__tsickle_destructured_1,
        proportion = population__tsickle_destructured_2 / populationSum;
    colorsToProportion[color] = proportion;
    final cam = CAM16.fromArgbInViewingConditions(color);
    colorsToCam[color] = cam;
    hueProportions[Math.round(cam.hue)] += proportion;
  }
  final colorsToExcitedProportion = <ARGBColor, double>{};
  for (final e in colorsToCam.entries) {
    final color__tsickle_destructured_3 = e.key,
        cam__tsickle_destructured_4 = e.value;
    final color = color__tsickle_destructured_3,
        hue = Math.round(cam__tsickle_destructured_4.hue);
    var excitedProportion = 0.0;
    for (var i = hue - 15; i < hue + 15; i++)
      excitedProportion +=
          hueProportions[math_utils_sanitizeDegrees(i).round()];
    colorsToExcitedProportion[color] = excitedProportion;
  }
  final colorsToScore = <ARGBColor, Score>{};
  for (final e in colorsToCam.entries) {
    final color__tsickle_destructured_5 = e.key,
        cam__tsickle_destructured_6 = e.value;
    final color = color__tsickle_destructured_5,
        cam = cam__tsickle_destructured_6,
        proportionScore = 70 * colorsToExcitedProportion[color]!;
    colorsToScore[color] =
        proportionScore + (cam.chroma - 48) * (48 > cam.chroma ? 0.1 : 0.3);
  }
  final filteredARGBColors = filter(colorsToExcitedProportion, colorsToCam),
      dedupedARGBColorsToScore = new Map<ARGBColor, Score>();
  for (final color in filteredARGBColors) {
    var duplicateHue = false;
    final hue = colorsToCam[color]!.hue;
    for (final alreadyChosenARGBColor__tsickle_destructured_7
        in dedupedARGBColorsToScore.keys) {
      final alreadyChosenHue =
          colorsToCam[alreadyChosenARGBColor__tsickle_destructured_7]!.hue;
      if (15 > 180 - Math.abs(Math.abs(hue - alreadyChosenHue) - 180)) {
        duplicateHue = true;
        break;
      }
    }
    if (!duplicateHue) {
      dedupedARGBColorsToScore[color] = colorsToScore[color]!;
    }
  }
  final colorsByScoreDescending = dedupedARGBColorsToScore.entries.toList();
  colorsByScoreDescending
      .sort((first, second) => second.value.compareTo(first.value));
  final answer = colorsByScoreDescending.map((entry) => entry.key).toList();
  if (answer.isEmpty) {
    // pixel blue
    answer.add(0xff4285f4);
  }
  return answer;
}

List<ARGBColor> filter(
  Map<int, double> colorsToExcitedProportion,
  Map<ARGBColor, CAM16> colorsToCam,
) {
  final filtered = <ARGBColor>[];
  for (final e in colorsToCam.entries) {
    final color__tsickle_destructured_8 = e.key,
        cam__tsickle_destructured_9 = e.value;
    final color = color__tsickle_destructured_8,
        cam = cam__tsickle_destructured_9,
        proportion = colorsToExcitedProportion[color]!;
    if (15 <= cam.chroma && 10 <= lstarFromArgb(color) && 0.01 <= proportion) {
      filtered.add(color);
    }
  }
  return filtered;
}
