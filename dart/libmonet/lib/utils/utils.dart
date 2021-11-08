import '../math.dart';

num math_utils_signum(num input) {
  return 0 > input
      ? -1
      : 0 == input
          ? 0
          : 1;
}

num math_utils_clamp(num max, num input) {
  return Math.min(Math.max(input, 0), max);
}

num math_utils_sanitizeDegrees(num degrees) {
  return 0 > degrees
      ? degrees % 360 + 360
      : 360 <= degrees
          ? degrees % 360
          : degrees;
}
