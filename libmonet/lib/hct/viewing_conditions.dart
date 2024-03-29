import '../math.dart';
import '../utils.dart';

class ViewingConditions {
  final double n;
  final double aw;
  final double nbb;
  final double ncb;
  final double c;
  final double nc;
  final List<double> rgbD;
  final double fl;
  final double fLRoot;
  final double z;
  const ViewingConditions(
    this.n,
    this.aw,
    this.nbb,
    this.ncb,
    this.c,
    this.nc,
    this.rgbD,
    this.fl,
    this.fLRoot,
    this.z,
  );

  static final ViewingConditions DEFAULT = (
      [List<double> whitePoint = WHITE_POINT_D65,
      double? adaptingLuminance,
      num backgroundLstar = 50,
      num surround = 2,
      bool discountingIlluminant = false]) {
    adaptingLuminance ??= 200 / Math.PI * 100 * Math.pow(66 / 116, 3) / 100;
    final rW = 0.401288 * whitePoint[0] +
            0.650173 * whitePoint[1] +
            -0.051461 * whitePoint[2],
        gW = -0.250268 * whitePoint[0] +
            1.204414 * whitePoint[1] +
            0.045854 * whitePoint[2],
        bW = -0.002079 * whitePoint[0] +
            0.048952 * whitePoint[1] +
            0.953127 * whitePoint[2],
        f = 0.8 + surround / 10;
    num JSCompiler_temp;
    if (0.9 <= f) {
      var amount = 10 * (f - 0.9);
      JSCompiler_temp = 0.59 * (1 - amount) + 0.69 * amount;
    } else {
      var amount$jscomp$0 = 10 * (f - 0.8);
      JSCompiler_temp = 0.525 * (1 - amount$jscomp$0) + 0.59 * amount$jscomp$0;
    }
    var d = discountingIlluminant
        ? 1
        : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
    d = 1 < d
        ? 1
        : 0 > d
            ? 0
            : d;
    final rgbD = [
          100 / rW * d + 1 - d,
          100 / gW * d + 1 - d,
          100 / bW * d + 1 - d
        ],
        k = 1 / (5 * adaptingLuminance + 1),
        k4 = k * k * k * k,
        k4F = 1 - k4,
        fl = k4 * adaptingLuminance +
            0.1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance),
        n = (8 < backgroundLstar
                ? 100 * Math.pow((backgroundLstar + 16) / 116, 3)
                : backgroundLstar / (24389 / 27) * 100) /
            whitePoint[1],
        nbb = 0.725 / Math.pow(n, 0.2),
        rgbAFactors = [
          Math.pow(fl * rgbD[0] * rW / 100, 0.42),
          Math.pow(fl * rgbD[1] * gW / 100, 0.42),
          Math.pow(fl * rgbD[2] * bW / 100, 0.42)
        ],
        rgbA = [
          400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
          400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
          400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
        ];
    return ViewingConditions(
        n,
        (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb,
        nbb,
        nbb,
        JSCompiler_temp.toDouble(),
        f,
        rgbD,
        fl,
        Math.pow(fl, 0.25).toDouble(),
        1.48 + Math.sqrt(n));
  }();
}
