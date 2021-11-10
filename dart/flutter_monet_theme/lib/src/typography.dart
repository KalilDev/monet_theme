import 'package:flutter/material.dart';

/// Generate an text theme from the specs in material 3 for an specific
/// [fontFamily].
TextTheme generateTextTheme([String? fontFamily]) => TextTheme(
      // md.sys.typescale.display-small
      headline1: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 36,
        height: 44 / 36,
        letterSpacing: 0,
      ),
      // md.sys.typescale.headline-large
      headline2: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 32,
        height: 40 / 32,
        letterSpacing: 0,
      ),
      // md.sys.typescale.headline-medium
      headline3: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 28,
        height: 36 / 28,
        letterSpacing: 0,
      ),
      // md.sys.typescale.headline-small
      headline4: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 24,
        height: 32 / 24,
        letterSpacing: 0,
      ),
      // md.sys.typescale.title-large
      headline5: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 22,
        height: 28 / 22,
        letterSpacing: 0,
      ),
      headline6: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 18,
        height: 24 / 18,
        letterSpacing: 0,
      ),
      // md.sys.typescale.title-medium
      subtitle1: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.w500,
        fontSize: 16,
        height: 24 / 16,
        letterSpacing: 0.1,
      ),
      // md.sys.typescale.title-small
      subtitle2: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.w500,
        fontSize: 14,
        height: 20 / 14,
        letterSpacing: 0.1,
      ),
      // md.sys.typescale.label-large
      button: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.w500,
        fontSize: 14,
        height: 20 / 14,
        letterSpacing: 0.1,
      ),
      // md.sys.typescale.body-large
      bodyText1: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 16,
        height: 24 / 16,
        letterSpacing: 0.5,
      ),
      // md.sys.typescale.body-medium
      bodyText2: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 14,
        height: 20 / 14,
        letterSpacing: 0.25,
      ),
      // md.sys.typescale.label-medium
      caption: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 12,
        height: 16 / 12,
        letterSpacing: 0.4,
      ),
      // md.sys.typescale.body-small
      overline: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.w500,
        fontSize: 12,
        height: 16 / 12,
        letterSpacing: 0.5,
      ),
    );

// TODO: additional typography definitions that are not present in [TextTheme]
/*
      // md.sys.typescale.display-large on tvs
      display1: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 64,
        height: 76/64,
        letterSpacing: -0.5,
      ),
      // md.sys.typescale.display-large
      display2: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 57,
        height: 64/57,
        letterSpacing: -0.25,
      ),
      // md.sys.typescale.display-medium
      display3: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.normal,
        fontSize: 45,
        height: 52/45,
        letterSpacing: 0,
      ),
      // md.sys.typescale.label-small
      labelSmall: TextStyle(
        fontFamily: fontFamily ?? 'Roboto',
        fontWeight: FontWeight.w500,
        fontSize: 11,
        height: 16/11,
        letterSpacing: 0.5,
      ),
*/