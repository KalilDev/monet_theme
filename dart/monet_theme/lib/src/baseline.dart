import './model.dart';
import './generate.dart';

final RawMonetTheme raw_baseline_1p = generateRawTheme(
  0xFF0B57D0,
  primarySeed: 0xFF0B57D0,
  secondarySeed: 0xFF00639B,
  tertiarySeed: 0xFF146C2E,
  neutralSeed: 0xFF5E5E5E,
  neutralVariantSeed: 0xFF585F65,
  errorSeed: 0xFFBA1B1B,
).override(
  light: (scheme) => scheme.copyWith(
    background: 0xFFFFFFFF,
    surface: 0xFFFFFFFF,
  ),
);

final RawMonetTheme raw_baseline_3p = generateRawTheme(
  0xFF6750A4,
  primarySeed: 0xFF6750A4,
  secondarySeed: 0xFF625B71,
  tertiarySeed: 0xFF7D5260,
  neutralSeed: 0xFF605D62,
  neutralVariantSeed: 0xFF605D66,
  errorSeed: 0xFFBA1B1B,
);
