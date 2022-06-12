# flutter_monet_theme

An package for creating monet themes in flutter with an friendly api

## Features

- Theme generation from an single, or more seed values
- Seed value inference from images
- Material Design 3 compatible typography
- Material Design 3 compatible color palettes: ![an reference palette](example/assets/palette.png)

## Usage

Create an MonetTheme (or chose an baseline one), and use it with flutter.

```dart
final MonetTheme monetTheme = baseline_3p;
final TextTheme monetTextTheme = generateTextTheme();
final theme =  ThemeData.from(
    colorScheme: monetTheme.light.toColorScheme(),
    textTheme: monetTextTheme,
);
final darkTheme= ThemeData.from(
    colorScheme: monetTheme.dark.toColorScheme(),
    textTheme: monetTextTheme,
);
```