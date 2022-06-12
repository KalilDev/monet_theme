import 'package:libmonet/hct/cam16.dart';
import 'package:libmonet/hct/hct.dart';

import '../color.dart';
import '../math.dart';
import '../utils.dart';
import 'tonal_palette.dart';

class CorePalette {
  final TonalPalette a1;
  final TonalPalette a2;
  final TonalPalette a3;
  final TonalPalette n1;
  final TonalPalette n2;
  final TonalPalette error;

  CorePalette._(this.a1, this.a2, this.a3, this.n1, this.n2, this.error);

  factory CorePalette(ARGBColor argb) {
    final cam = CAM16.fromArgbInViewingConditions(argb);
    var seedHCT = new HCT(cam.hue, cam.chroma, lstarFromArgb(argb));
    final hue = seedHCT.hue;
    return CorePalette._(
      new TonalPalette.from(hue, Math.max(48, seedHCT.chroma).toDouble()),
      new TonalPalette.from(hue, 16),
      new TonalPalette.from(hue + 60, 24),
      new TonalPalette.from(hue, 4),
      new TonalPalette.from(hue, 8),
      new TonalPalette.from(25, 84),
    );
  }
}
