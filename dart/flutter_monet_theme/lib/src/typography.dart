import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/flutter_monet_theme.dart';
import 'package:flutter_monet_theme/src/device.dart';

/// Generate an text theme from the specs in material 3 for an specific
/// [fontFamily].
MD3TextAdaptativeTheme generateTextTheme([String? fontFamily]) =>
    fontFamily == null
        ? baselineMD3Typography
        : baselineMD3Typography.apply(fontFamily: fontFamily);

const MD3TextAdaptativeTheme baselineMD3Typography = MD3TextAdaptativeTheme(
  displayLarge: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      letterSpacing: 0,
    ),
    // TODO: better scale for every one but mobile.
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 45, height: 50.52),
      mobile: MD3TextAdaptativeProperties(size: 57, height: 64),
      tablet: MD3TextAdaptativeProperties(size: 64, height: 71.85),
      desktop: MD3TextAdaptativeProperties(size: 78, height: 87.57),
      largeScreenTv: MD3TextAdaptativeProperties(size: 84, height: 94.31),
    ),
  ),
  displayMedium: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      letterSpacing: 0,
    ),
    // TODO: better scale for every one but mobile.
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 36, height: 41.6),
      mobile: MD3TextAdaptativeProperties(size: 45, height: 52),
      tablet: MD3TextAdaptativeProperties(size: 57, height: 65.85),
      desktop: MD3TextAdaptativeProperties(size: 72, height: 83.2),
      largeScreenTv: MD3TextAdaptativeProperties(size: 78, height: 90.13),
    ),
  ),
  displaySmall: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      letterSpacing: 0,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 32, height: 39),
      mobile: MD3TextAdaptativeProperties(size: 36, height: 44),
      tablet: MD3TextAdaptativeProperties(size: 45, height: 55),
      desktop: MD3TextAdaptativeProperties(size: 64, height: 78),
      largeScreenTv: MD3TextAdaptativeProperties(size: 72, height: 88),
    ),
  ),
  headlineLarge: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      letterSpacing: 0,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 22, height: 27.5),
      mobile: MD3TextAdaptativeProperties(size: 32, height: 40),
      tablet: MD3TextAdaptativeProperties(size: 36, height: 45),
      desktop: MD3TextAdaptativeProperties(size: 57, height: 71.25),
      largeScreenTv: MD3TextAdaptativeProperties(size: 64, height: 80),
    ),
  ),
  headlineMedium: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      letterSpacing: 0,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 18, height: 23.15),
      mobile: MD3TextAdaptativeProperties(size: 28, height: 36),
      tablet: MD3TextAdaptativeProperties(size: 32, height: 41.15),
      desktop: MD3TextAdaptativeProperties(size: 45, height: 57.85),
      largeScreenTv: MD3TextAdaptativeProperties(size: 57, height: 73.3),
    ),
  ),
  headlineSmall: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      letterSpacing: 0,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 16, height: 21.3),
      mobile: MD3TextAdaptativeProperties(size: 24, height: 32),
      tablet: MD3TextAdaptativeProperties(size: 24, height: 32),
      desktop: MD3TextAdaptativeProperties(size: 24, height: 32),
      largeScreenTv: MD3TextAdaptativeProperties(size: 28, height: 37.3),
    ),
  ),
  titleLarge: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      letterSpacing: 0,
    ),
    scale: MD3TextAdaptativeScale(
      // TODO: an better scale for watch
      watch: MD3TextAdaptativeProperties(size: 14, height: 17.81),
      mobile: MD3TextAdaptativeProperties(size: 22, height: 28),
      tablet: MD3TextAdaptativeProperties(size: 22, height: 28),
      desktop: MD3TextAdaptativeProperties(size: 22, height: 28),
      largeScreenTv: MD3TextAdaptativeProperties(size: 24, height: 30.5),
    ),
  ),
  titleMedium: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.1,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 14, height: 21),
      mobile: MD3TextAdaptativeProperties(size: 16, height: 24),
      tablet: MD3TextAdaptativeProperties(size: 16, height: 24),
      desktop: MD3TextAdaptativeProperties(size: 16, height: 24),
      largeScreenTv: MD3TextAdaptativeProperties(size: 18, height: 27),
    ),
  ),
  titleSmall: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.1,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 16, height: 22.85),
      mobile: MD3TextAdaptativeProperties(size: 14, height: 20),
      tablet: MD3TextAdaptativeProperties(size: 14, height: 20),
      desktop: MD3TextAdaptativeProperties(size: 14, height: 20),
      largeScreenTv: MD3TextAdaptativeProperties(size: 16, height: 22.85),
    ),
  ),
  labelLarge: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.1,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 16, height: 22.85),
      mobile: MD3TextAdaptativeProperties(size: 14, height: 20),
      tablet: MD3TextAdaptativeProperties(size: 14, height: 20),
      desktop: MD3TextAdaptativeProperties(size: 14, height: 20),
      largeScreenTv: MD3TextAdaptativeProperties(size: 16, height: 22.85),
    ),
  ),
  labelMedium: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.4,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 11, height: 14.66),
      mobile: MD3TextAdaptativeProperties(size: 12, height: 16),
      tablet: MD3TextAdaptativeProperties(size: 12, height: 16),
      desktop: MD3TextAdaptativeProperties(size: 12, height: 16),
      largeScreenTv: MD3TextAdaptativeProperties(size: 14, height: 18.66),
    ),
  ),
  labelSmall: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.5,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 5, height: 9.15),
      mobile: MD3TextAdaptativeProperties(size: 6, height: 11),
      tablet: MD3TextAdaptativeProperties(size: 6, height: 11),
      desktop: MD3TextAdaptativeProperties(size: 6, height: 11),
      largeScreenTv: MD3TextAdaptativeProperties(size: 8, height: 14.66),
    ),
  ),
  bodyLarge: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.5,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 14, height: 21),
      mobile: MD3TextAdaptativeProperties(size: 16, height: 24),
      tablet: MD3TextAdaptativeProperties(size: 16, height: 24),
      desktop: MD3TextAdaptativeProperties(size: 16, height: 24),
      largeScreenTv: MD3TextAdaptativeProperties(size: 18, height: 27),
    ),
  ),
  bodyMedium: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.25,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 12, height: 17.15),
      mobile: MD3TextAdaptativeProperties(size: 14, height: 20),
      tablet: MD3TextAdaptativeProperties(size: 14, height: 20),
      desktop: MD3TextAdaptativeProperties(size: 14, height: 20),
      largeScreenTv: MD3TextAdaptativeProperties(size: 16, height: 22.85),
    ),
  ),
  bodySmall: MD3TextStyle(
    base: TextStyle(
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w500,
      letterSpacing: 0.5,
    ),
    scale: MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties(size: 11, height: 14.66),
      mobile: MD3TextAdaptativeProperties(size: 12, height: 16),
      tablet: MD3TextAdaptativeProperties(size: 12, height: 16),
      desktop: MD3TextAdaptativeProperties(size: 12, height: 16),
      largeScreenTv: MD3TextAdaptativeProperties(size: 14, height: 18.66),
    ),
  ),
);

class MD3TextAdaptativeProperties {
  final double size;
  final double height;

  const MD3TextAdaptativeProperties({
    required this.size,
    required this.height,
  });

  MD3TextAdaptativeProperties copyWith({
    double? size,
    double? height,
  }) =>
      MD3TextAdaptativeProperties(
        size: size ?? this.size,
        height: height ?? this.height,
      );

  TextStyle applyTo(TextStyle textStyle) => textStyle.copyWith(
        fontSize: size,
        height: height / size,
      );
}

class MD3TextAdaptativeScale {
  final MD3TextAdaptativeProperties watch;
  final MD3TextAdaptativeProperties mobile;
  final MD3TextAdaptativeProperties tablet;
  final MD3TextAdaptativeProperties desktop;
  final MD3TextAdaptativeProperties largeScreenTv;

  const MD3TextAdaptativeScale({
    required this.watch,
    required this.mobile,
    required this.tablet,
    required this.desktop,
    required this.largeScreenTv,
  });

  const MD3TextAdaptativeScale.single(MD3TextAdaptativeProperties sizeAndHeight)
      : watch = sizeAndHeight,
        mobile = sizeAndHeight,
        tablet = sizeAndHeight,
        desktop = sizeAndHeight,
        largeScreenTv = sizeAndHeight;

  MD3TextAdaptativeScale copyWith({
    MD3TextAdaptativeProperties? watch,
    MD3TextAdaptativeProperties? mobile,
    MD3TextAdaptativeProperties? tablet,
    MD3TextAdaptativeProperties? desktop,
    MD3TextAdaptativeProperties? largeScreenTv,
  }) =>
      MD3TextAdaptativeScale(
        watch: watch ?? this.watch,
        mobile: mobile ?? this.mobile,
        tablet: tablet ?? this.tablet,
        desktop: desktop ?? this.desktop,
        largeScreenTv: largeScreenTv ?? this.largeScreenTv,
      );

  MD3TextAdaptativeProperties forDeviceType(MD3DeviceType type) {
    switch (type) {
      case MD3DeviceType.watch:
        return watch;
      case MD3DeviceType.mobile:
        return mobile;
      case MD3DeviceType.tablet:
        return tablet;
      case MD3DeviceType.desktop:
        return desktop;
      case MD3DeviceType.largeScreenTv:
        return largeScreenTv;
    }
  }
}

class MD3TextStyle {
  final TextStyle base;
  final MD3TextAdaptativeScale scale;

  const MD3TextStyle({
    required this.base,
    required this.scale,
  });

  MD3TextStyle copyWith({
    TextStyle? base,
    MD3TextAdaptativeScale? scale,
  }) =>
      MD3TextStyle(
        base: base ?? this.base,
        scale: scale ?? this.scale,
      );

  TextStyle resolveTo(MD3DeviceType deviceType) =>
      scale.forDeviceType(deviceType).applyTo(base);
  MD3TextStyle apply({
    String? fontFamily,
  }) =>
      MD3TextStyle(
        base: base.apply(
          fontFamily: fontFamily,
        ),
        scale: scale,
      );
}

class MD3TextAdaptativeTheme {
  final MD3TextStyle displayLarge;
  final MD3TextStyle displayMedium;
  final MD3TextStyle displaySmall;
  final MD3TextStyle headlineLarge;
  final MD3TextStyle headlineMedium;
  final MD3TextStyle headlineSmall;
  final MD3TextStyle titleLarge;
  final MD3TextStyle titleMedium;
  final MD3TextStyle titleSmall;
  final MD3TextStyle labelLarge;
  final MD3TextStyle labelMedium;
  final MD3TextStyle labelSmall;
  final MD3TextStyle bodyLarge;
  final MD3TextStyle bodyMedium;
  final MD3TextStyle bodySmall;

  const MD3TextAdaptativeTheme({
    required this.displayLarge,
    required this.displayMedium,
    required this.displaySmall,
    required this.headlineLarge,
    required this.headlineMedium,
    required this.headlineSmall,
    required this.titleLarge,
    required this.titleMedium,
    required this.titleSmall,
    required this.labelLarge,
    required this.labelMedium,
    required this.labelSmall,
    required this.bodyLarge,
    required this.bodyMedium,
    required this.bodySmall,
  });

  MD3TextAdaptativeTheme apply({
    String? fontFamily,
  }) =>
      MD3TextAdaptativeTheme(
        displayLarge: displayLarge.apply(
          fontFamily: fontFamily,
        ),
        displayMedium: displayMedium.apply(
          fontFamily: fontFamily,
        ),
        displaySmall: displaySmall.apply(
          fontFamily: fontFamily,
        ),
        headlineLarge: headlineLarge.apply(
          fontFamily: fontFamily,
        ),
        headlineMedium: headlineMedium.apply(
          fontFamily: fontFamily,
        ),
        headlineSmall: headlineSmall.apply(
          fontFamily: fontFamily,
        ),
        titleLarge: titleLarge.apply(
          fontFamily: fontFamily,
        ),
        titleMedium: titleMedium.apply(
          fontFamily: fontFamily,
        ),
        titleSmall: titleSmall.apply(
          fontFamily: fontFamily,
        ),
        labelLarge: labelLarge.apply(
          fontFamily: fontFamily,
        ),
        labelMedium: labelMedium.apply(
          fontFamily: fontFamily,
        ),
        labelSmall: labelSmall.apply(
          fontFamily: fontFamily,
        ),
        bodyLarge: bodyLarge.apply(
          fontFamily: fontFamily,
        ),
        bodyMedium: bodyMedium.apply(
          fontFamily: fontFamily,
        ),
        bodySmall: bodySmall.apply(
          fontFamily: fontFamily,
        ),
      );

  MD3TextAdaptativeTheme copyWith({
    MD3TextStyle? displayLarge,
    MD3TextStyle? displayMedium,
    MD3TextStyle? displaySmall,
    MD3TextStyle? headlineLarge,
    MD3TextStyle? headlineMedium,
    MD3TextStyle? headlineSmall,
    MD3TextStyle? titleLarge,
    MD3TextStyle? titleMedium,
    MD3TextStyle? titleSmall,
    MD3TextStyle? labelLarge,
    MD3TextStyle? labelMedium,
    MD3TextStyle? labelSmall,
    MD3TextStyle? bodyLarge,
    MD3TextStyle? bodyMedium,
    MD3TextStyle? bodySmall,
  }) =>
      MD3TextAdaptativeTheme(
        displayLarge: displayLarge ?? this.displayLarge,
        displayMedium: displayMedium ?? this.displayMedium,
        displaySmall: displaySmall ?? this.displaySmall,
        headlineLarge: headlineLarge ?? this.headlineLarge,
        headlineMedium: headlineMedium ?? this.headlineMedium,
        headlineSmall: headlineSmall ?? this.headlineSmall,
        titleLarge: titleLarge ?? this.titleLarge,
        titleMedium: titleMedium ?? this.titleMedium,
        titleSmall: titleSmall ?? this.titleSmall,
        labelLarge: labelLarge ?? this.labelLarge,
        labelMedium: labelMedium ?? this.labelMedium,
        labelSmall: labelSmall ?? this.labelSmall,
        bodyLarge: bodyLarge ?? this.bodyLarge,
        bodyMedium: bodyMedium ?? this.bodyMedium,
        bodySmall: bodySmall ?? this.bodySmall,
      );

  MD3TextTheme resolveTo(MD3DeviceType deviceType) => MD3TextTheme(
        displayLarge: displayLarge.resolveTo(deviceType),
        displayMedium: displayMedium.resolveTo(deviceType),
        displaySmall: displaySmall.resolveTo(deviceType),
        headlineLarge: headlineLarge.resolveTo(deviceType),
        headlineMedium: headlineMedium.resolveTo(deviceType),
        headlineSmall: headlineSmall.resolveTo(deviceType),
        titleLarge: titleLarge.resolveTo(deviceType),
        titleMedium: titleMedium.resolveTo(deviceType),
        titleSmall: titleSmall.resolveTo(deviceType),
        labelLarge: labelLarge.resolveTo(deviceType),
        labelMedium: labelMedium.resolveTo(deviceType),
        labelSmall: labelSmall.resolveTo(deviceType),
        bodyLarge: bodyLarge.resolveTo(deviceType),
        bodyMedium: bodyMedium.resolveTo(deviceType),
        bodySmall: bodySmall.resolveTo(deviceType),
      );
}

class MD3TextTheme {
  final TextStyle displayLarge;
  final TextStyle displayMedium;
  final TextStyle displaySmall;
  final TextStyle headlineLarge;
  final TextStyle headlineMedium;
  final TextStyle headlineSmall;
  final TextStyle titleLarge;
  final TextStyle titleMedium;
  final TextStyle titleSmall;
  final TextStyle labelLarge;
  final TextStyle labelMedium;
  final TextStyle labelSmall;
  final TextStyle bodyLarge;
  final TextStyle bodyMedium;
  final TextStyle bodySmall;

  const MD3TextTheme({
    required this.displayLarge,
    required this.displayMedium,
    required this.displaySmall,
    required this.headlineLarge,
    required this.headlineMedium,
    required this.headlineSmall,
    required this.titleLarge,
    required this.titleMedium,
    required this.titleSmall,
    required this.labelLarge,
    required this.labelMedium,
    required this.labelSmall,
    required this.bodyLarge,
    required this.bodyMedium,
    required this.bodySmall,
  });

  TextTheme toTextTheme() => TextTheme(
        headline1: displaySmall,
        headline2: headlineLarge,
        headline3: headlineMedium,
        headline4: headlineSmall,
        headline5: titleLarge,
        // todo
        headline6: titleMedium,
        subtitle1: titleMedium,
        subtitle2: titleSmall,
        bodyText1: bodyLarge,
        bodyText2: bodyMedium,
        button: labelLarge,
        caption: labelMedium,
        overline: bodySmall,
      );

  MD3TextTheme apply({
    String? fontFamily,
  }) =>
      MD3TextTheme(
        displayLarge: displayLarge.apply(
          fontFamily: fontFamily,
        ),
        displayMedium: displayMedium.apply(
          fontFamily: fontFamily,
        ),
        displaySmall: displaySmall.apply(
          fontFamily: fontFamily,
        ),
        headlineLarge: headlineLarge.apply(
          fontFamily: fontFamily,
        ),
        headlineMedium: headlineMedium.apply(
          fontFamily: fontFamily,
        ),
        headlineSmall: headlineSmall.apply(
          fontFamily: fontFamily,
        ),
        titleLarge: titleLarge.apply(
          fontFamily: fontFamily,
        ),
        titleMedium: titleMedium.apply(
          fontFamily: fontFamily,
        ),
        titleSmall: titleSmall.apply(
          fontFamily: fontFamily,
        ),
        labelLarge: labelLarge.apply(
          fontFamily: fontFamily,
        ),
        labelMedium: labelMedium.apply(
          fontFamily: fontFamily,
        ),
        labelSmall: labelSmall.apply(
          fontFamily: fontFamily,
        ),
        bodyLarge: bodyLarge.apply(
          fontFamily: fontFamily,
        ),
        bodyMedium: bodyMedium.apply(
          fontFamily: fontFamily,
        ),
        bodySmall: bodySmall.apply(
          fontFamily: fontFamily,
        ),
      );

  MD3TextTheme copyWith({
    TextStyle? displayLarge,
    TextStyle? displayMedium,
    TextStyle? displaySmall,
    TextStyle? headlineLarge,
    TextStyle? headlineMedium,
    TextStyle? headlineSmall,
    TextStyle? titleLarge,
    TextStyle? titleMedium,
    TextStyle? titleSmall,
    TextStyle? labelLarge,
    TextStyle? labelMedium,
    TextStyle? labelSmall,
    TextStyle? bodyLarge,
    TextStyle? bodyMedium,
    TextStyle? bodySmall,
  }) =>
      MD3TextTheme(
        displayLarge: displayLarge ?? this.displayLarge,
        displayMedium: displayMedium ?? this.displayMedium,
        displaySmall: displaySmall ?? this.displaySmall,
        headlineLarge: headlineLarge ?? this.headlineLarge,
        headlineMedium: headlineMedium ?? this.headlineMedium,
        headlineSmall: headlineSmall ?? this.headlineSmall,
        titleLarge: titleLarge ?? this.titleLarge,
        titleMedium: titleMedium ?? this.titleMedium,
        titleSmall: titleSmall ?? this.titleSmall,
        labelLarge: labelLarge ?? this.labelLarge,
        labelMedium: labelMedium ?? this.labelMedium,
        labelSmall: labelSmall ?? this.labelSmall,
        bodyLarge: bodyLarge ?? this.bodyLarge,
        bodyMedium: bodyMedium ?? this.bodyMedium,
        bodySmall: bodySmall ?? this.bodySmall,
      );
}
