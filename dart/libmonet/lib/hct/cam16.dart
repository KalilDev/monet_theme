import '../hct.dart';
import '../math.dart';
import '../utils.dart';

class CAM16 {
  final double hue;
  final double chroma;
  final double j;
  final double q;
  final double s;
  final double jstar;
  final double astar;
  final double bstar;
  const CAM16(
    this.hue,
    this.chroma,
    this.j,
    this.q,
    this.s,
    this.jstar,
    this.astar,
    this.bstar,
  );

  factory CAM16.fromArgbInViewingConditions(int argb) {
    final redL = 100 * linearized(((argb & 0xff0000) >> 16) / 255),
        greenL = 100 * linearized(((argb & 0xFF00) >> 8) / 255),
        blueL = 100 * linearized((argb & 0xFF) / 255),
        x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL,
        y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL,
        z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL,
        rD = ViewingConditions.DEFAULT.rgbD[0] *
            (0.401288 * x + 0.650173 * y - 0.051461 * z),
        gD = ViewingConditions.DEFAULT.rgbD[1] *
            (-0.250268 * x + 1.204414 * y + 0.045854 * z),
        bD = ViewingConditions.DEFAULT.rgbD[2] *
            (-0.002079 * x + 0.048952 * y + 0.953127 * z),
        rAF = Math.pow(ViewingConditions.DEFAULT.fl * (rD).abs() / 100, 0.42),
        gAF = Math.pow(ViewingConditions.DEFAULT.fl * Math.abs(gD) / 100, 0.42),
        bAF = Math.pow(ViewingConditions.DEFAULT.fl * Math.abs(bD) / 100, 0.42),
        rA = 400 * math_utils_signum(rD) * rAF / (rAF + 27.13),
        gA = 400 * math_utils_signum(gD) * gAF / (gAF + 27.13),
        bA = 400 * math_utils_signum(bD) * bAF / (bAF + 27.13),
        a = (11 * rA + -12 * gA + bA) / 11,
        b = (rA + gA - 2 * bA) / 9,
        atanDegrees = 180 * Math.atan2(b, a) / Math.PI,
        hue = 0 > atanDegrees
            ? atanDegrees + 360
            : 360 <= atanDegrees
                ? atanDegrees - 360
                : atanDegrees,
        hueRadians = hue * Math.PI / 180,
        j = 100 *
            Math.pow(
                    (40 * rA + 20 * gA + bA) /
                        20 *
                        ViewingConditions.DEFAULT.nbb /
                        ViewingConditions.DEFAULT.aw,
                    ViewingConditions.DEFAULT.c * ViewingConditions.DEFAULT.z)
                .toDouble(),
        alpha = Math.pow(
                50000 /
                    13 *
                    0.25 *
                    (Math.cos((20.14 > hue ? hue + 360 : hue) * Math.PI / 180 +
                            2) +
                        3.8) *
                    ViewingConditions.DEFAULT.nc *
                    ViewingConditions.DEFAULT.ncb *
                    Math.sqrt(a * a + b * b) /
                    ((20 * rA + 20 * gA + 21 * bA) / 20 + 0.305),
                0.9) *
            Math.pow(1.64 - Math.pow(0.29, ViewingConditions.DEFAULT.n), 0.73),
        c = alpha * Math.sqrt(j / 100).toDouble(),
        mstar = 1 /
            0.0228 *
            Math.log(1 + 0.0228 * c * ViewingConditions.DEFAULT.fLRoot);
    return new CAM16(
        hue,
        c,
        j,
        4 /
            ViewingConditions.DEFAULT.c *
            Math.sqrt(j / 100) *
            (ViewingConditions.DEFAULT.aw + 4) *
            ViewingConditions.DEFAULT.fLRoot,
        50.0 *
            Math.sqrt(alpha *
                ViewingConditions.DEFAULT.c /
                (ViewingConditions.DEFAULT.aw + 4)),
        (1 + 100 * 0.007) * j / (1 + 0.007 * j),
        mstar * Math.cos(hueRadians),
        mstar * Math.sin(hueRadians));
  }
  factory CAM16.fromJchInViewingConditions(double j, double c, double h) {
    final hueRadians = h * Math.PI / 180,
        mstar = 1 /
            0.0228 *
            Math.log(1 + 0.0228 * c * ViewingConditions.DEFAULT.fLRoot);
    return new CAM16(
        h,
        c,
        j,
        4 /
            ViewingConditions.DEFAULT.c *
            Math.sqrt(j / 100) *
            (ViewingConditions.DEFAULT.aw + 4) *
            ViewingConditions.DEFAULT.fLRoot,
        50.0 *
            Math.sqrt(c /
                Math.sqrt(j / 100) *
                ViewingConditions.DEFAULT.c /
                (ViewingConditions.DEFAULT.aw + 4)),
        (1 + 100 * 0.007) * j / (1 + 0.007 * j),
        mstar * Math.cos(hueRadians),
        mstar * Math.sin(hueRadians));
  }
  double distance(CAM16 other) {
    final dJ = this.jstar - other.jstar,
        dA = this.astar - other.astar,
        dB = this.bstar - other.bstar;
    return 1.41 * Math.pow(Math.sqrt(dJ * dJ + dA * dA + dB * dB), 0.63);
  }

  int toViewedArgb() {
    final t = Math.pow(
            (0 == this.chroma || 0 == this.j
                    ? 0
                    : this.chroma / Math.sqrt(this.j / 100)) /
                Math.pow(
                    1.64 - Math.pow(0.29, ViewingConditions.DEFAULT.n), 0.73),
            1 / 0.9),
        hRad = this.hue * Math.PI / 180,
        p2 = ViewingConditions.DEFAULT.aw *
            Math.pow(this.j / 100,
                1 / ViewingConditions.DEFAULT.c / ViewingConditions.DEFAULT.z) /
            ViewingConditions.DEFAULT.nbb,
        hSin = Math.sin(hRad),
        hCos = Math.cos(hRad),
        gamma = 23 *
            (p2 + 0.305) *
            t /
            (50000 /
                    13 *
                    (Math.cos(hRad + 2) + 3.8) *
                    5.75 *
                    ViewingConditions.DEFAULT.nc *
                    ViewingConditions.DEFAULT.ncb +
                11 * t * hCos +
                108 * t * hSin),
        a = gamma * hCos,
        b = gamma * hSin,
        rA = (460 * p2 + 451 * a + 288 * b) / 1403,
        gA = (460 * p2 - 891 * a - 261 * b) / 1403,
        bA = (460 * p2 - 220 * a - 6300 * b) / 1403,
        rF = 100 /
            ViewingConditions.DEFAULT.fl *
            math_utils_signum(rA) *
            Math.pow(Math.max(0, 27.13 * (rA).abs() / (400 - (rA).abs())),
                1 / 0.42) /
            ViewingConditions.DEFAULT.rgbD[0],
        gF = 100 /
            ViewingConditions.DEFAULT.fl *
            math_utils_signum(gA) *
            Math.pow(Math.max(0, 27.13 * (gA).abs() / (400 - (gA).abs())),
                1 / 0.42) /
            ViewingConditions.DEFAULT.rgbD[1],
        bF = 100 /
            ViewingConditions.DEFAULT.fl *
            math_utils_signum(bA) *
            Math.pow(Math.max(0, 27.13 * (bA).abs() / (400 - (bA).abs())),
                1 / 0.42) /
            ViewingConditions.DEFAULT.rgbD[2];
    return argbFromXyzComponents(
        1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF,
        0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF,
        -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF);
  }
}
