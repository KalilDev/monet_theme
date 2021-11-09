import 'package:libmonet/hct/hct.dart';

class TonalPalette {
  final double hue;
  final double chroma;
  final Map<int, int> _cache = {};

  TonalPalette(this.hue, this.chroma);

  int operator [](int tone) => getTone(tone);

  int getTone(int tone) {
    final argb = _cache.putIfAbsent(
      tone,
      () => HCT(hue, chroma, tone.toDouble()).toArgb(),
    );
    return argb;
  }
}
