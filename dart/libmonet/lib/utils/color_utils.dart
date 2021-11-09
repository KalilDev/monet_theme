import '../color.dart';
import '../math.dart';
import 'utils.dart';

const List<double> WHITE_POINT_D65 = const [95.047, 100, 108.883];
double lstarFromArgb(ARGBColor argb) {
  var y = 21.26 * linearized(((argb & 0xff0000) >> 16) / 255) +
      71.52 * linearized(((argb & 0xff00) >> 8) / 255) +
      7.22 * linearized((argb & 0xff) / 255);
  y /= 100;
  return y <= 216 / 24389 ? 24389 / 27 * y : 116 * Math.pow(y, 1 / 3) - 16;
}

String hexFromInt(ARGBColor argb) {
  final g = (argb & 0xff00) >> 8,
      b = argb & 255,
      outParts = <String>[
        ((argb & 0xff0000) >> 16).toRadixString(16),
        g.toRadixString(16),
        b.toRadixString(16)
      ];
  for (var i = 0; i < outParts.length; i++) {
    final part = outParts[i];
    if (1 == part.length) {
      outParts[i] = '0' + part;
    }
  }
  return '#' + outParts.join('');
}

ARGBColor argbFromRgbComponents(List<int> rgb) {
  return (0xFF000000 |
          (rgb[0] & 255) << 16 |
          (rgb[1] & 255) << 8 |
          rgb[2] & 255) >>>
      0;
}

List<double> labFromArgb(ARGBColor argb) {
  final e = 216 / 24389,
      kappa = 24389 / 27,
      redL = 100 * linearized(((argb & 0xff0000) >> 16) / 255),
      greenL = 100 * linearized(((argb & 0xff00) >> 8) / 255),
      blueL = 100 * linearized((argb & 0xff) / 255),
      yNormalized = (0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL) /
          WHITE_POINT_D65[1];
  num fy;
  fy = yNormalized > e
      ? Math.pow(yNormalized, 1 / 3)
      : (kappa * yNormalized + 16) / 116;
  final xNormalized =
          (0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL) /
              WHITE_POINT_D65[0],
      zNormalized =
          (0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL) /
              WHITE_POINT_D65[2];
  return [
    116.0 * fy - 16,
    500.0 *
        ((xNormalized > e
                ? Math.pow(xNormalized, 1 / 3)
                : (kappa * xNormalized + 16) / 116) -
            fy),
    200.0 *
        (fy -
            (zNormalized > e
                ? Math.pow(zNormalized, 1 / 3)
                : (kappa * zNormalized + 16) / 116))
  ];
}

ARGBColor argbFromXyzComponents(double x, double y, double z) {
  x /= 100;
  y /= 100;
  z /= 100;
  return argbFromRgbComponents([
    Math.round(math_utils_clamp(
        255, 255 * delinearized(3.2406 * x + -1.5372 * y + -0.4986 * z))),
    Math.round(math_utils_clamp(
        255, 255 * delinearized(-0.9689 * x + 1.8758 * y + 0.0415 * z))),
    Math.round(math_utils_clamp(
        255, 255 * delinearized(0.0557 * x + -0.204 * y + 1.057 * z)))
  ]);
}

ARGBColor argbFromHex(String hex) {
  hex = hex.replaceFirst('#', '');
  final isThree = 3 == hex.length,
      isSix = 6 == hex.length,
      isEight = 8 == hex.length;
  if (!isThree && !isSix && !isEight) throw StateError('unexpected hex ' + hex);
  var r = 0, g = 0, b = 0;
  if (isThree) {
    r = int.parse(hex.substring(0, 1) * 2, radix: 16);
    g = int.parse(hex.substring(1, 2) * 2, radix: 16);
    b = int.parse(hex.substring(2, 3) * 2, radix: 16);
  } else if (isSix) {
    r = int.parse(hex.substring(0, 2), radix: 16);
    g = int.parse(hex.substring(2, 4), radix: 16);
    b = int.parse(hex.substring(4, 6), radix: 16);
  } else if (isEight) {
    r = int.parse(hex.substring(2, 4), radix: 16);
    g = int.parse(hex.substring(4, 6), radix: 16);
    b = int.parse(hex.substring(6, 8), radix: 16);
  }
  return 0xFF000000 | (r & 0xff) << 16 | (g & 0xff) << 8 | b & 0xff;
}

ARGBColor argbFromLstar(double lstar) {
  final fy = (lstar + 16) / 116,
      kappa = 24389 / 27,
      cubeExceedEpsilon = fy * fy * fy > 216 / 24389;
  var xyz = [
    (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) *
        WHITE_POINT_D65[0],
    (8 < lstar ? fy * fy * fy : lstar / kappa) * WHITE_POINT_D65[1],
    (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) *
        WHITE_POINT_D65[2]
  ];
  return argbFromXyzComponents(xyz[0], xyz[1], xyz[2]);
}

double linearized(double rgb) {
  return 0.04045 >= rgb
      ? rgb / 12.92
      : Math.pow((rgb + 0.055) / 1.055, 2.4).toDouble();
}

double delinearized(double rgb) {
  return 0.0031308 >= rgb
      ? 12.92 * rgb
      : 1.055 * Math.pow(rgb, 1 / 2.4) - 0.055;
}
