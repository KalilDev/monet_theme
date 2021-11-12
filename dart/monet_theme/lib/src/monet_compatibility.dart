import 'package:material_color_utilities/hct/cam16.dart';
import 'package:material_color_utilities/hct/hct.dart';
import 'package:material_color_utilities/palettes/tonal_palette.dart';

typedef ARGBColor = int;
typedef HCT = HctColor;
typedef CAM16 = Cam16;

extension TonalPaletteE on TonalPalette {
  ARGBColor operator [](int tone) => get(tone);
}
