import '../utils.dart';
import 'cam16.dart';

class HCT {
  num internalHue;
  num internalChroma;
  num internalTone;
  HCT(this.internalHue, this.internalChroma, this.internalTone) {
    this.setInternalState(this.toInt());
  }
  toInt() {
    return hct_getIntInViewingConditions(
        math_utils_sanitizeDegrees(this.internalHue),
        this.internalChroma,
        math_utils_clamp(100, this.internalTone));
  }

  setInternalState(argb) {
    final cam = CAM16.fromIntInViewingConditions(argb),
        tone = lstarFromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = tone;
  }

  get hue {
    return this.internalHue;
  }

  set hue(newHue) {
    this.setInternalState(hct_getIntInViewingConditions(
        math_utils_sanitizeDegrees(math_utils_sanitizeDegrees(newHue)),
        this.internalChroma,
        math_utils_clamp(100, this.internalTone)));
  }

  get chroma {
    return this.internalChroma;
  }

  set chroma(newChroma) {
    this.setInternalState(hct_getIntInViewingConditions(
        math_utils_sanitizeDegrees(this.internalHue),
        newChroma,
        math_utils_clamp(100, this.internalTone)));
  }

  get tone {
    return this.internalTone;
  }

  set tone(newTone) {
    this.setInternalState(hct_getIntInViewingConditions(
        math_utils_sanitizeDegrees(this.internalHue),
        this.internalChroma,
        math_utils_clamp(100, newTone)));
  }
}

int hct_getIntInViewingConditions(
    num hue$jscomp$0, num chroma$jscomp$0, num tone$jscomp$0) {
  if (1 > chroma$jscomp$0 ||
      0 >= (tone$jscomp$0).round() ||
      100 <= (tone$jscomp$0).round()) return intFromLstar(tone$jscomp$0);
  hue$jscomp$0 = math_utils_sanitizeDegrees(hue$jscomp$0);
  var high = chroma$jscomp$0.toDouble(),
      mid = chroma$jscomp$0.toDouble(),
      low = 0.0,
      isFirstLoop = true,
      answer = null;
  for (; 0.4 <= (low - high).abs();) {
    var hue = hue$jscomp$0, chroma = mid, tone = tone$jscomp$0;
    var low$jscomp$0 = 0.0,
        high$jscomp$0 = 100.0,
        mid$jscomp$0,
        bestdL = 1000.0,
        bestdE = 1000.0,
        bestCam = null;
    for (; 0.01 < (low$jscomp$0 - high$jscomp$0).abs();) {
      mid$jscomp$0 = low$jscomp$0 + (high$jscomp$0 - low$jscomp$0) / 2;
      final clipped = CAM16
              .fromJchInViewingConditions(mid$jscomp$0, chroma, hue)
              .viewed(),
          clippedLstar = lstarFromInt(clipped),
          dL = (tone - clippedLstar).abs();
      if (0.2 > dL) {
        final camClipped = CAM16.fromIntInViewingConditions(clipped),
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
        return possibleAnswer.viewed();
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
  return null == answer ? intFromLstar(tone$jscomp$0) : answer.viewed();
}
