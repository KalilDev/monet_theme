import 'package:libmonet/hct/hct.dart';

class TonalPalette {
  final num hue;
  final num chroma;
  final Map<int, int> cache = {};

  TonalPalette(this.hue, this.chroma);
  int tone(int tone) {
    final argb = cache.putIfAbsent(
      tone,
      () => HCT(hue, chroma, tone).toInt(),
    );
    return argb;
  }
}
