import 'package:flutter/material.dart';
import 'package:monet_theme/monet_theme.dart';

import 'model.dart';

/// Generate an [MonetTheme] from the seed color [seed], while optionally
/// overriding [primary], [secondary], [tertiary], [neutral], [neutralVariant]
/// and [error].
MonetTheme generateTheme(
  Color seed, {
  Color? primarySeed,
  Color? secondarySeed,
  Color? tertiarySeed,
  Color? neutralSeed,
  Color? neutralVariantSeed,
  Color? errorSeed,
}) =>
    MonetTheme.fromRaw(
      generateRawTheme(
        seed.value,
        primarySeed: primarySeed?.value,
        secondarySeed: secondarySeed?.value,
        tertiarySeed: tertiarySeed?.value,
        neutralSeed: neutralSeed?.value,
        neutralVariantSeed: neutralVariantSeed?.value,
        errorSeed: errorSeed?.value,
      ),
    );
