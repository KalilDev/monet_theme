import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:monet_theme/monet_theme.dart';

/// Try to infer an good seed from an image`s pixels, based on an scoring of the
/// colors in an quantized (into an 32x32x32 color space) version of the image.
Future<int?> inferSeedFromImage(ui.Image image) async {
  final abgrPixels = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
  if (abgrPixels == null) {
    return null;
  }
  final u32rgbaPixels = Uint32List.view(abgrPixels.buffer);
  for (var i = 0; i < u32rgbaPixels.length; i++) {
    final curr = u32rgbaPixels[i];
    final r = (curr & 0x000000FF) >> 0;
    final g = (curr & 0x0000FF00) >> 8;
    final b = (curr & 0x00FF0000) >> 16;
    final a = (curr & 0xFF000000) >> 24;
    final argb = a << 24 | r << 16 | g << 8 | b << 0;
    u32rgbaPixels[i] = argb;
  }
  return inferSeedFromPixels(u32rgbaPixels);
}
