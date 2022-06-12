import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:monet_theme/monet_theme.dart';

/// Try to infer an good seed from an image`s pixels, based on an scoring of the
/// colors in an quantized (into an 32x32x32 color space) version of the image.
Future<int?> inferSeedFromImage(ui.Image image) async {
  final rgbaPixels = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
  if (rgbaPixels == null) {
    return null;
  }
  final u32rgbaPixels = Uint32List.view(rgbaPixels.buffer);
  for (var i = 0; i < u32rgbaPixels.length; i++) {
    final curr = u32rgbaPixels[i];
    final a = (curr & 0xFF) << 24;
    final rgb = (curr & 0xFFFFFF00) >> 8;
    u32rgbaPixels[i] = a | rgb;
  }
  return inferSeedFromPixels(u32rgbaPixels);
}
