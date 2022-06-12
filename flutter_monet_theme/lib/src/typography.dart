// ignore_for_file: unnecessary_null_comparison

import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/flutter_monet_theme.dart';
import 'package:flutter_monet_theme/src/device.dart';

import 'lerp_double.dart';

/// Generate an text theme from the specs in material 3 for an specific
/// [fontFamily].
MD3TextAdaptativeTheme generateTextTheme({
  String brandRegularFontFamily = 'Roboto',
  String plainMediumFontFamily = 'Roboto',
}) {
  final areEqual = brandRegularFontFamily == plainMediumFontFamily;
  if (areEqual && plainMediumFontFamily == 'Roboto') {
    return MD3TextAdaptativeTheme.baseline;
  }
  return MD3TextAdaptativeTheme.baseline.apply(
    fontFamily: areEqual ? plainMediumFontFamily : null,
    brandRegularFontFamily: !areEqual ? brandRegularFontFamily : null,
    plainMediumFontFamily: !areEqual ? plainMediumFontFamily : null,
  );
}

@Deprecated('Use MD3TextAdaptativeTheme.baseline')
const MD3TextAdaptativeTheme baselineMD3Typography =
    MD3TextAdaptativeTheme.baseline;

class MD3TextAdaptativeProperties {
  final double size;
  final double height;

  const MD3TextAdaptativeProperties({
    required this.size,
    required this.height,
  });

  TextStyle applyTo(TextStyle textStyle) => textStyle.copyWith(
        fontSize: size,
        height: height / size,
      );
  @override
  int get hashCode => Object.hashAll([
        size,
        height,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3TextAdaptativeProperties) {
      return false;
    }
    return true && size == other.size && height == other.height;
  }

  MD3TextAdaptativeProperties copyWith({
    double? size,
    double? height,
  }) =>
      MD3TextAdaptativeProperties(
        size: size ?? this.size,
        height: height ?? this.height,
      );

  static MD3TextAdaptativeProperties lerp(
      MD3TextAdaptativeProperties a, MD3TextAdaptativeProperties b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3TextAdaptativeProperties(
      size: nnLerpDouble(a.size, b.size, t),
      height: nnLerpDouble(a.height, b.height, t),
    );
  }
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

  @override
  int get hashCode => Object.hashAll([
        watch,
        mobile,
        tablet,
        desktop,
        largeScreenTv,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3TextAdaptativeScale) {
      return false;
    }
    return true &&
        watch == other.watch &&
        mobile == other.mobile &&
        tablet == other.tablet &&
        desktop == other.desktop &&
        largeScreenTv == other.largeScreenTv;
  }

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

  static MD3TextAdaptativeScale lerp(
    MD3TextAdaptativeScale a,
    MD3TextAdaptativeScale b,
    double t,
  ) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3TextAdaptativeScale(
      watch: MD3TextAdaptativeProperties.lerp(a.watch, b.watch, t),
      mobile: MD3TextAdaptativeProperties.lerp(a.mobile, b.mobile, t),
      tablet: MD3TextAdaptativeProperties.lerp(a.tablet, b.tablet, t),
      desktop: MD3TextAdaptativeProperties.lerp(a.desktop, b.desktop, t),
      largeScreenTv:
          MD3TextAdaptativeProperties.lerp(a.largeScreenTv, b.largeScreenTv, t),
    );
  }
}

class MD3TextStyle {
  final TextStyle base;
  final MD3TextAdaptativeScale scale;

  const MD3TextStyle({
    required this.base,
    required this.scale,
  });

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
  @override
  int get hashCode => Object.hashAll([
        base,
        scale,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3TextStyle) {
      return false;
    }
    return true && base == other.base && scale == other.scale;
  }

  MD3TextStyle copyWith({
    TextStyle? base,
    MD3TextAdaptativeScale? scale,
  }) =>
      MD3TextStyle(
        base: base ?? this.base,
        scale: scale ?? this.scale,
      );

  static MD3TextStyle lerp(MD3TextStyle a, MD3TextStyle b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3TextStyle(
      base: TextStyle.lerp(a.base, b.base, t)!,
      scale: MD3TextAdaptativeScale.lerp(a.scale, b.scale, t),
    );
  }
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

  static const MD3TextAdaptativeTheme baseline = MD3TextAdaptativeTheme(
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
        watch: MD3TextAdaptativeProperties(size: 9.15, height: 5),
        mobile: MD3TextAdaptativeProperties(size: 11, height: 6),
        tablet: MD3TextAdaptativeProperties(size: 11, height: 6),
        desktop: MD3TextAdaptativeProperties(size: 11, height: 6),
        largeScreenTv: MD3TextAdaptativeProperties(size: 14.66, height: 8),
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

  MD3TextAdaptativeTheme apply({
    String? fontFamily,
    String? brandRegularFontFamily,
    String? plainMediumFontFamily,
  }) {
    assert(fontFamily != null
        ? (plainMediumFontFamily == brandRegularFontFamily &&
            brandRegularFontFamily == null)
        : true);
    return MD3TextAdaptativeTheme(
      displayLarge: displayLarge.apply(
        fontFamily: brandRegularFontFamily ?? fontFamily,
      ),
      displayMedium: displayMedium.apply(
        fontFamily: brandRegularFontFamily ?? fontFamily,
      ),
      displaySmall: displaySmall.apply(
        fontFamily: brandRegularFontFamily ?? fontFamily,
      ),
      headlineLarge: headlineLarge.apply(
        fontFamily: brandRegularFontFamily ?? fontFamily,
      ),
      headlineMedium: headlineMedium.apply(
        fontFamily: brandRegularFontFamily ?? fontFamily,
      ),
      headlineSmall: headlineSmall.apply(
        fontFamily: brandRegularFontFamily ?? fontFamily,
      ),
      titleLarge: titleLarge.apply(
        fontFamily: brandRegularFontFamily ?? fontFamily,
      ),
      titleMedium: titleMedium.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
      titleSmall: titleSmall.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
      labelLarge: labelLarge.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
      labelMedium: labelMedium.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
      labelSmall: labelSmall.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
      bodyLarge: bodyLarge.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
      bodyMedium: bodyMedium.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
      bodySmall: bodySmall.apply(
        fontFamily: plainMediumFontFamily ?? fontFamily,
      ),
    );
  }

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
  @override
  int get hashCode => Object.hashAll([
        displayLarge,
        displayMedium,
        displaySmall,
        headlineLarge,
        headlineMedium,
        headlineSmall,
        titleLarge,
        titleMedium,
        titleSmall,
        labelLarge,
        labelMedium,
        labelSmall,
        bodyLarge,
        bodyMedium,
        bodySmall,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3TextAdaptativeTheme) {
      return false;
    }
    return true &&
        displayLarge == other.displayLarge &&
        displayMedium == other.displayMedium &&
        displaySmall == other.displaySmall &&
        headlineLarge == other.headlineLarge &&
        headlineMedium == other.headlineMedium &&
        headlineSmall == other.headlineSmall &&
        titleLarge == other.titleLarge &&
        titleMedium == other.titleMedium &&
        titleSmall == other.titleSmall &&
        labelLarge == other.labelLarge &&
        labelMedium == other.labelMedium &&
        labelSmall == other.labelSmall &&
        bodyLarge == other.bodyLarge &&
        bodyMedium == other.bodyMedium &&
        bodySmall == other.bodySmall;
  }

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

  static MD3TextAdaptativeTheme lerp(
      MD3TextAdaptativeTheme a, MD3TextAdaptativeTheme b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3TextAdaptativeTheme(
      displayLarge: MD3TextStyle.lerp(a.displayLarge, b.displayLarge, t),
      displayMedium: MD3TextStyle.lerp(a.displayMedium, b.displayMedium, t),
      displaySmall: MD3TextStyle.lerp(a.displaySmall, b.displaySmall, t),
      headlineLarge: MD3TextStyle.lerp(a.headlineLarge, b.headlineLarge, t),
      headlineMedium: MD3TextStyle.lerp(a.headlineMedium, b.headlineMedium, t),
      headlineSmall: MD3TextStyle.lerp(a.headlineSmall, b.headlineSmall, t),
      titleLarge: MD3TextStyle.lerp(a.titleLarge, b.titleLarge, t),
      titleMedium: MD3TextStyle.lerp(a.titleMedium, b.titleMedium, t),
      titleSmall: MD3TextStyle.lerp(a.titleSmall, b.titleSmall, t),
      labelLarge: MD3TextStyle.lerp(a.labelLarge, b.labelLarge, t),
      labelMedium: MD3TextStyle.lerp(a.labelMedium, b.labelMedium, t),
      labelSmall: MD3TextStyle.lerp(a.labelSmall, b.labelSmall, t),
      bodyLarge: MD3TextStyle.lerp(a.bodyLarge, b.bodyLarge, t),
      bodyMedium: MD3TextStyle.lerp(a.bodyMedium, b.bodyMedium, t),
      bodySmall: MD3TextStyle.lerp(a.bodySmall, b.bodySmall, t),
    );
  }
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
  @override
  int get hashCode => Object.hashAll([
        displayLarge,
        displayMedium,
        displaySmall,
        headlineLarge,
        headlineMedium,
        headlineSmall,
        titleLarge,
        titleMedium,
        titleSmall,
        labelLarge,
        labelMedium,
        labelSmall,
        bodyLarge,
        bodyMedium,
        bodySmall,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3TextTheme) {
      return false;
    }
    return true &&
        displayLarge == other.displayLarge &&
        displayMedium == other.displayMedium &&
        displaySmall == other.displaySmall &&
        headlineLarge == other.headlineLarge &&
        headlineMedium == other.headlineMedium &&
        headlineSmall == other.headlineSmall &&
        titleLarge == other.titleLarge &&
        titleMedium == other.titleMedium &&
        titleSmall == other.titleSmall &&
        labelLarge == other.labelLarge &&
        labelMedium == other.labelMedium &&
        labelSmall == other.labelSmall &&
        bodyLarge == other.bodyLarge &&
        bodyMedium == other.bodyMedium &&
        bodySmall == other.bodySmall;
  }

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

  static MD3TextTheme lerp(MD3TextTheme a, MD3TextTheme b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3TextTheme(
      displayLarge: TextStyle.lerp(a.displayLarge, b.displayLarge, t)!,
      displayMedium: TextStyle.lerp(a.displayMedium, b.displayMedium, t)!,
      displaySmall: TextStyle.lerp(a.displaySmall, b.displaySmall, t)!,
      headlineLarge: TextStyle.lerp(a.headlineLarge, b.headlineLarge, t)!,
      headlineMedium: TextStyle.lerp(a.headlineMedium, b.headlineMedium, t)!,
      headlineSmall: TextStyle.lerp(a.headlineSmall, b.headlineSmall, t)!,
      titleLarge: TextStyle.lerp(a.titleLarge, b.titleLarge, t)!,
      titleMedium: TextStyle.lerp(a.titleMedium, b.titleMedium, t)!,
      titleSmall: TextStyle.lerp(a.titleSmall, b.titleSmall, t)!,
      labelLarge: TextStyle.lerp(a.labelLarge, b.labelLarge, t)!,
      labelMedium: TextStyle.lerp(a.labelMedium, b.labelMedium, t)!,
      labelSmall: TextStyle.lerp(a.labelSmall, b.labelSmall, t)!,
      bodyLarge: TextStyle.lerp(a.bodyLarge, b.bodyLarge, t)!,
      bodyMedium: TextStyle.lerp(a.bodyMedium, b.bodyMedium, t)!,
      bodySmall: TextStyle.lerp(a.bodySmall, b.bodySmall, t)!,
    );
  }
}
