import 'dart:math';

import 'package:libmonet/libmonet.dart';

import 'package:tuple/tuple.dart';

HCT _hctFromArgb(int argb) {
  final cam = CAM16.fromArgbInViewingConditions(argb);
  return HCT(cam.hue, cam.chroma, lstarFromArgb(argb));
}

/// Create an [TonalPalette] for an custom color that was harmonized with the
/// [primary] palette.
/// https://m3.material.io/styles/color/the-color-system/custom-colors
@Deprecated('Use generateHarmonizedCustomColor')
TonalPalette generateRarmonizedCustomColor(
  ARGBColor customColorSeed,
  TonalPalette primary,
) =>
    generateHarmonizedCustomColor(customColorSeed, primary);

/// Create an [TonalPalette] for an custom color that was harmonized with the
/// [primary] palette.
/// https://m3.material.io/styles/color/the-color-system/custom-colors
TonalPalette generateHarmonizedCustomColor(
  ARGBColor customColorSeed,
  TonalPalette primary,
) {
  // Setup the colors needed.
  final primary50HCT = _hctFromArgb(primary[50]);
  final customHCT = _hctFromArgb(customColorSeed);
  final custom50HCT = HCT(customHCT.hue, customHCT.chroma, 50);
  final custom50Lab = labFromArgb(custom50HCT.toArgb());

  // Find the colors that are harmonic to the [primary50HCT] color in the HCT
  // color space
  final harmonicHCTs = harmonicHueDeltas
      .map((hue) => primary50HCT.hue + hue)
      .map(math_utils_sanitizeDegrees)
      .map((hue) => HCT(
            hue.toDouble(),
            primary50HCT.chroma,
            primary50HCT.tone,
          ))
      .toList();
  final harmonicLABs = harmonicHCTs.map((hct) => hct.toArgb()).map(labFromArgb);
  // Find the harmonic color that is the closest to the [custom50Lab] color
  // using the lab space for comparission.
  final closestHarmonicIndex = harmonicLABs
      .map((c) => _pointProvider.distance(c, custom50Lab))
      .indexed
      .fold<Tuple2<int, num>>(
        Tuple2(-1, double.infinity),
        (closest, e) => min(e.item1, closest.item2) == e.item1 ? e : closest,
      )
      .item1;
  final closestHarmonic = harmonicHCTs[closestHarmonicIndex];

  final deltaHue = custom50HCT.hue - closestHarmonic.hue;

  // Update the deltaHue so that the resulting hue is still in an harmonic range
  final harmonicDeltaHue = deltaHue.clamp(
    -harmonicHueEpsilon,
    harmonicHueEpsilon,
  );

  // Generate an TonalPalette from the new harmonic custom color hue and the
  // custom color chroma
  return TonalPalette.from(
    closestHarmonic.hue + harmonicDeltaHue,
    // Use the primary input chroma
    primary50HCT.chroma,
  );
}

/// The maximum difference of hue from an harmonic point so that two colors
/// still look good together.
const double harmonicHueEpsilon = 10;

/// The difference of hue of colors that look good together.
const List<double> harmonicHueDeltas = [
  // analogous
  30,
  -30,
  // complementary,
  180,
  // triadic
  120,
  -120,
  // tetradic
  90,
  -90,
  /*180,*/
];

final _pointProvider = LabPointProvider();

extension _<T> on Iterable<T> {
  Iterable<Tuple2<int, T>> get indexed sync* {
    var i = 0;
    for (final e in this) {
      yield Tuple2(i++, e);
    }
  }
}
