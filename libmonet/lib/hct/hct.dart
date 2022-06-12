import '../color.dart';
import '../utils.dart';
import 'cam16.dart';

class HCT {
  double internalHue;
  double internalChroma;
  double internalTone;
  HCT(this.internalHue, this.internalChroma, this.internalTone) {
    this.setInternalState(this.toArgb());
  }
  ARGBColor toArgb() {
    return hct_getArgbInViewingConditions(
      math_utils_sanitizeDegrees(this.internalHue).toDouble(),
      this.internalChroma,
      math_utils_clamp(100, this.internalTone).toDouble(),
    );
  }

  void setInternalState(ARGBColor argb) {
    final cam = CAM16.fromArgbInViewingConditions(argb),
        tone = lstarFromArgb(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = tone;
  }

  double get hue {
    return this.internalHue;
  }

  set hue(double newHue) {
    this.setInternalState(
      hct_getArgbInViewingConditions(
        math_utils_sanitizeDegrees(math_utils_sanitizeDegrees(newHue))
            .toDouble(),
        this.internalChroma,
        math_utils_clamp(100, this.internalTone).toDouble(),
      ),
    );
  }

  double get chroma {
    return this.internalChroma;
  }

  set chroma(double newChroma) {
    this.setInternalState(hct_getArgbInViewingConditions(
        math_utils_sanitizeDegrees(this.internalHue).toDouble(),
        newChroma,
        math_utils_clamp(100, this.internalTone).toDouble()));
  }

  double get tone {
    return this.internalTone;
  }

  set tone(double newTone) {
    this.setInternalState(
      hct_getArgbInViewingConditions(
          math_utils_sanitizeDegrees(this.internalHue).toDouble(),
          this.internalChroma,
          math_utils_clamp(100, newTone).toDouble()),
    );
  }
}

ARGBColor hct_getArgbInViewingConditions(
    double hue$jscomp$0, double chroma$jscomp$0, double tone$jscomp$0) {
  if (1 > chroma$jscomp$0 ||
      0 >= (tone$jscomp$0).round() ||
      100 <= (tone$jscomp$0).round()) return argbFromLstar(tone$jscomp$0);
  hue$jscomp$0 = math_utils_sanitizeDegrees(hue$jscomp$0).toDouble();
  var high = chroma$jscomp$0.toDouble(),
      mid = chroma$jscomp$0.toDouble(),
      low = 0.0,
      isFirstLoop = true;

  CAM16? answer = null;
  for (; 0.4 <= (low - high).abs();) {
    var hue = hue$jscomp$0, chroma = mid, tone = tone$jscomp$0;
    var low$jscomp$0 = 0.0,
        high$jscomp$0 = 100.0,
        bestdL = 1000.0,
        bestdE = 1000.0;
    double mid$jscomp$0;
    CAM16? bestCam = null;
    for (; 0.01 < (low$jscomp$0 - high$jscomp$0).abs();) {
      mid$jscomp$0 = low$jscomp$0 + (high$jscomp$0 - low$jscomp$0) / 2;
      final clipped = CAM16
              .fromJchInViewingConditions(mid$jscomp$0, chroma, hue)
              .toViewedArgb(),
          clippedLstar = lstarFromArgb(clipped),
          dL = (tone - clippedLstar).abs();
      if (0.2 > dL) {
        final camClipped = CAM16.fromArgbInViewingConditions(clipped),
            dE = camClipped.distance(CAM16.fromJchInViewingConditions(
                camClipped.j, camClipped.chroma, hue));
        if (1 >= dE && dE <= bestdE) {
          bestdL = dL;
          bestdE = dE;
          bestCam = camClipped;
        }
      }
      if (0 == bestdL && 0 == bestdE) break;
      clippedLstar < tone
          ? low$jscomp$0 = mid$jscomp$0
          : high$jscomp$0 = mid$jscomp$0;
    }
    final possibleAnswer = bestCam;
    if (isFirstLoop) {
      if (null != possibleAnswer) {
        return possibleAnswer.toViewedArgb();
      }
      isFirstLoop = false;
    } else if (null == possibleAnswer) {
      high = mid;
    } else {
      answer = possibleAnswer;
      low = mid;
    }
    mid = low + (high - low) / 2;
  }
  return null == answer ? argbFromLstar(tone$jscomp$0) : answer.toViewedArgb();
}
