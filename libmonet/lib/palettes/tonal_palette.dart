import 'package:libmonet/hct/hct.dart';

class HCTTonalPalette extends TonalPalette {
  final double hue;
  final double chroma;
  final Map<int, int> _cache = {};

  HCTTonalPalette(this.hue, this.chroma);

  @override
  int getTone(int tone) {
    final argb = _cache.putIfAbsent(
      tone,
      () => HCT(hue, chroma, tone.toDouble()).toArgb(),
    );
    return argb;
  }
}

abstract class TonalPalette {
  const TonalPalette();
  int operator [](int tone) => getTone(tone);
  factory TonalPalette.from(double hue, double chroma) = HCTTonalPalette;

  int getTone(int tone);
}
