import 'dart:math' as math;

class Math {
  static num pow(num a, num b) => math.pow(a, b);
  static num exp(num a) => math.exp(a);
  static const PI = math.pi;
  static num abs(num a) => a.abs();
  static int round(num a) => a.round();
  static num cbrt(num a) => math.pow(a, 1 / 3);
  static num sqrt(num a) => math.sqrt(a);
  static num max(num a, num b) => math.max(a, b);
  static num min(num a, num b) => math.min(a, b);
  static num atan2(num a, num b) => math.atan2(a, b);
  static num sin(num a) => math.sin(a);
  static num cos(num a) => math.cos(a);
  static num log(num a) => math.log(a);
}
