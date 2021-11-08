import 'package:libmonet/hct/hct.dart';

class TonalPalette {
  final num hue;
  final num chroma;
  final Map<num, int> cache = {};

  TonalPalette(this.hue, this.chroma);
  tone(tone) {
    final argb = this
        .cache
        .putIfAbsent(tone, () => new HCT(this.hue, this.chroma, tone).toInt());
    return argb;
  }
}
