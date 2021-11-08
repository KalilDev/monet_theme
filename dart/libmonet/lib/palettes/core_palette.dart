import 'package:libmonet/hct/cam16.dart';
import 'package:libmonet/hct/hct.dart';

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

  factory CorePalette(int argb) {
    final cam = CAM16.fromIntInViewingConditions(argb);
    var JSCompiler_inline_result =
        new HCT(cam.hue, cam.chroma, lstarFromInt(argb));
    final hue = JSCompiler_inline_result.hue;
    return CorePalette._(
      new TonalPalette(hue, Math.max(48, JSCompiler_inline_result.chroma)),
      new TonalPalette(hue, 16),
      new TonalPalette(hue + 60, 24),
      new TonalPalette(hue, 4),
      new TonalPalette(hue, 8),
      new TonalPalette(25, 84),
    );
  }
}
