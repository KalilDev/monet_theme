import 'package:material_color_utilities/material_color_utilities.dart';

import './model.dart';
import './generate.dart';

TonalPalette _commonTonalPaletteFrom(Map<int, int> map) =>
    TonalPalette.fromList(
        TonalPalette.commonTones.map((e) => map[e]!).toList());
final RawMonetTheme raw_baseline_1p = generateRawThemeFrom(
  null,
  primary: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFAFBFF,
      98: 0xFFF8F9FF,
      95: 0xFFECF3FE,
      90: 0xFFD3E3FD,
      80: 0xFFA8C7FA,
      70: 0xFF7CACF8,
      60: 0xFF4C8DF6,
      50: 0xFF1B6EF3,
      40: 0xFF0B57D0,
      35: 0xFF155298,
      30: 0xFF0842A0,
      25: 0xFF003B77,
      20: 0xFF062E6F,
      10: 0xFF041E49,
      0: 0xFF000000,
    },
  ),
  secondary: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFF7FCFF,
      98: 0xFFE3FFF6,
      95: 0xFFDFF3FF,
      90: 0xFFC2E7FF,
      80: 0xFF7FCFFF,
      70: 0xFF5AB3F0,
      60: 0xFF3998D3,
      50: 0xFF047DB7,
      40: 0xFF00639B,
      35: 0xFF005E4E,
      30: 0xFF004A77,
      25: 0xFF004438,
      20: 0xFF003355,
      10: 0xFF001D35,
      0: 0xFF000000,
    },
  ),
  tertiary: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFF2FFEE,
      98: 0xFFE8FFE7,
      95: 0xFFE7F8ED,
      90: 0xFFC4EED0,
      80: 0xFF6DD58C,
      70: 0xFF37BE5F,
      60: 0xFF1EA446,
      50: 0xFF198639,
      40: 0xFF146C2E,
      35: 0xFF006024,
      30: 0xFF0F5223,
      25: 0xFF004618,
      20: 0xFF0A3818,
      10: 0xFF072711,
      0: 0xFF000000,
    },
  ),
  neutral: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFDFCFB,
      98: 0xFFFAF9F9,
      95: 0xFFF2F2F2,
      90: 0xFFE3E3E3,
      80: 0xFFC7C7C7,
      70: 0xFFABABAB,
      60: 0xFF8F8F8F,
      50: 0xFF757575,
      40: 0xFF5E5E5E,
      35: 0xFF525252,
      30: 0xFF474747,
      25: 0xFF3A3C3C,
      20: 0xFF303030,
      10: 0xFF1F1F1F,
      0: 0xFF000000,
    },
  ),
  neutralVariant: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFAFDFB,
      98: 0xFFF8FAF8,
      95: 0xFFEFF2EF,
      90: 0xFFE1E3E1,
      80: 0xFFC4C7C5,
      70: 0xFFA9ACAA,
      60: 0xFF8E918F,
      50: 0xFF747775,
      40: 0xFF5C5F5E,
      35: 0xFF4F5351,
      30: 0xFF444746,
      25: 0xFF393C3B,
      20: 0xFF2D312F,
      10: 0xFF191D1C,
      0: 0xFF000000,
    },
  ),
  error: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFFFBF9,
      98: 0xFFFFF8F6,
      95: 0xFFFCEEEE,
      90: 0xFFF9DEDC,
      80: 0xFFF2B8B5,
      70: 0xFFEC928E,
      60: 0xFFE46962,
      50: 0xFFDC362E,
      40: 0xFFB3261E,
      35: 0xFF833D3B,
      30: 0xFF8C1D18,
      25: 0xFF662726,
      20: 0xFF601410,
      10: 0xFF410E0B,
      0: 0xFF000000,
    },
  ),
).override(
  light: (scheme) => scheme.copyWith(
    background: 0xFFFFFFFF,
    surface: 0xFFFFFFFF,
  ),
);

final RawMonetTheme raw_baseline_3p = generateRawThemeFrom(
  null,
  primary: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFFFBFE,
      98: 0xFFFEF7FF,
      95: 0xFFF6EDFF,
      90: 0xFFEADDFF,
      80: 0xFFD0BCFF,
      70: 0xFFB69DF8,
      60: 0xFF9A82DB,
      50: 0xFF7F67BE,
      40: 0xFF6750A4,
      35: 0xFF5B4497,
      30: 0xFF4F378B,
      25: 0xFF432B7E,
      20: 0xFF381E72,
      10: 0xFF21005D,
      0: 0xFF000000,
    },
  ),
  secondary: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFFFBFE,
      98: 0xFFFEF7FF,
      95: 0xFFF6EDFF,
      90: 0xFFE8DEF8,
      80: 0xFFCCC2DC,
      70: 0xFFB0A7C0,
      60: 0xFF958DA5,
      50: 0xFF7A7289,
      40: 0xFF625B71,
      35: 0xFF564F65,
      30: 0xFF4A4458,
      25: 0xFF3E384D,
      20: 0xFF332D41,
      10: 0xFF1D192B,
      0: 0xFF000000,
    },
  ),
  tertiary: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFFFBFA,
      98: 0xFFFFF8F9,
      95: 0xFFFFECF1,
      90: 0xFFFFD8E4,
      80: 0xFFEFB8C8,
      70: 0xFFD29DAC,
      60: 0xFFB58392,
      50: 0xFF986977,
      40: 0xFF7D5260,
      35: 0xFF704653,
      30: 0xFF633B48,
      25: 0xFF57303D,
      20: 0xFF492532,
      10: 0xFF31111D,
      0: 0xFF000000,
    },
  ),
  neutral: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFFFBFE,
      98: 0xFFFDF8FC,
      95: 0xFFF4EFF4,
      90: 0xFFE6E1E5,
      80: 0xFFC9C5CA,
      70: 0xFFAEAAAE,
      60: 0xFF939094,
      50: 0xFF787579,
      40: 0xFF605D62,
      35: 0xFF545255,
      30: 0xFF484649,
      25: 0xFF3D3B3E,
      20: 0xFF313033,
      10: 0xFF1C1B1F,
      0: 0xFF000000,
    },
  ),
  neutralVariant: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFFFBFE,
      98: 0xFFFEF7FF,
      95: 0xFFF5EEFA,
      90: 0xFFE7E0EC,
      80: 0xFFCAC4D0,
      70: 0xFFAEA9B4,
      60: 0xFF938F99,
      50: 0xFF79747E,
      40: 0xFF605D66,
      35: 0xFF54515A,
      30: 0xFF49454F,
      25: 0xFF3D3A43,
      20: 0xFF322F37,
      10: 0xFF1D1A22,
      0: 0xFF000000,
    },
  ),
  error: _commonTonalPaletteFrom(
    {
      100: 0xFFFFFFFF,
      99: 0xFFFFFBF9,
      98: 0xFFFFF8F6,
      95: 0xFFFCEEEE,
      90: 0xFFF9DEDC,
      80: 0xFFF2B8B5,
      70: 0xFFEC928E,
      60: 0xFFE46962,
      50: 0xFFDC362E,
      40: 0xFFB3261E,
      35: 0xFF833D3B,
      30: 0xFF8C1D18,
      25: 0xFF662726,
      20: 0xFF601410,
      10: 0xFF410E0B,
      0: 0xFF000000,
    },
  ),
);
