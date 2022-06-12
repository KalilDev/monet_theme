## 0.4.2

* **Bugfix**: Fix ColorTonalPalette interpolation

## 0.4.1

* Add [MonetTheme.inversePrimary]
* Bump package:monet_theme to 0.4.0

## 0.4.0

* Fix wrong baseline on [MD3TextAdaptativeTheme.labelSmall]
* Move some baselines to inside their model classes
* Improve some baselines according to the real spec
* **BREAKING**: Rename [MonetColorScheme.inverseOnSurface] to [MonetColorScheme.onInverseSurface]
* **BREAKING**: Make [MD3ElevationLevel()] deprecated and not const. Use [MD3ElevationLevel.from] instead

## 0.3.5

* Add lerp, copyWith, equality and hashCode to the models

## 0.3.4

* Add MD3StateLayerOpacityTheme.dragged

## 0.3.3

* Add MD3StateLayerOpacityTheme

## 0.3.1

- Add color scheme getters for each color kind on MonetColorScheme
- Add MonetColorScheme.getCustomColorScheme,MonetColorTheme.getCustomColorTheme
  and MonetColorKind.surface.

## 0.3.0

* Use material_color_utilities instead of libmonet

## 0.2.2

* Add generateCustomColorThemeFrom, generateColorHarmonizedCustomColor,
 CustomColorTheme, CustomColorScheme, MonetColorKind,
 MonetTheme.mergeCustomColor, MonetColorScheme.mergeCustomColor,
 MonetTheme.harmonizedCustomColorTheme and MonetTheme.harmonizedCustomColor

## 0.2.1

* Improve the MD3ElevationTheme and baseline

## 0.2.0

* Introduce MD3DeviceType, Typography themes, and MD3ElevationTheme.

## 0.1.0

* Initial release.
