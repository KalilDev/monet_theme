import 'package:libmonet/libmonet.dart';

void main() {
  final palette = CorePalette(0xDEADBEEF);
  final hct = HCT(palette.a1.hue, palette.a1.chroma, 10);
  print('hello');
}
