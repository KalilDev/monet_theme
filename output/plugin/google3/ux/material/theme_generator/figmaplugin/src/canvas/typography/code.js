'use strict';
const google3 = require('google3');
var Typography = class extends google3.BaseScene {
    create() {
        JSCompiler_StaticMethods_addSectionSpacing(this.scene);
        JSCompiler_StaticMethods_addSectionSpacing(this.scene);
        const prev = this.scene.lastRect.dy, label = JSCompiler_StaticMethods_createSectionLabel(this.scene, 'Typography');
        label.name = 'Label';
        this.scene.nodes.push(label);
        var styles = this.scene.theme.styles;
        JSCompiler_StaticMethods_addGroup(this.scene, 'Display', [
            JSCompiler_StaticMethods_createStyle(this, 'Display Large', 'display/large', styles.display2),
            JSCompiler_StaticMethods_createStyle(this, 'Display Medium', 'display/medium', styles.display3),
            JSCompiler_StaticMethods_createStyle(this, 'Display Small', 'display/small', styles.headline1)
        ]);
        this.scene.lastRect.dy += 20;
        JSCompiler_StaticMethods_addGroup(this.scene, 'Headline', [
            JSCompiler_StaticMethods_createStyle(this, 'Headline Large', 'headline/large', styles.headline2),
            JSCompiler_StaticMethods_createStyle(this, 'Headline Medium', 'headline/medium', styles.headline3),
            JSCompiler_StaticMethods_createStyle(this, 'Headline Small', 'headline/small', styles.headline4)
        ]);
        this.scene.lastRect.dy += 20;
        JSCompiler_StaticMethods_addGroup(this.scene, 'Title', [
            JSCompiler_StaticMethods_createStyle(this, 'Title Large', 'title/large', styles.headline5),
            JSCompiler_StaticMethods_createStyle(this, 'Title Medium', 'title/medium', styles.subhead1),
            JSCompiler_StaticMethods_createStyle(this, 'Title Small', 'title/small', styles.subhead2)
        ]);
        this.scene.lastRect.dy += 20;
        JSCompiler_StaticMethods_addGroup(this.scene, 'Label', [
            JSCompiler_StaticMethods_createStyle(this, 'Label Large', 'label/large', styles.button),
            JSCompiler_StaticMethods_createStyle(this, 'Label Medium', 'label/medium', styles.overline),
            JSCompiler_StaticMethods_createStyle(this, 'Label Small', 'label/small', styles.labelSmall)
        ]);
        this.scene.lastRect.dy += 20;
        JSCompiler_StaticMethods_addGroup(this.scene, 'Body', [
            JSCompiler_StaticMethods_createStyle(this, 'Body Large', 'body/large', styles.body1),
            JSCompiler_StaticMethods_createStyle(this, 'Body Medium', 'body/medium', styles.body2),
            JSCompiler_StaticMethods_createStyle(this, 'Body Small', 'body/small', styles.caption)
        ]);
        this.scene.lastRect.dy += 20;
        this.scene.lastRect.dy = prev;
        this.scene.lastRect.dx += this.scene.nodes[0].width + 80;
    }
};