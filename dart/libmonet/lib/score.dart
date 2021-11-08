library libmonet.score;

import 'hct/cam16.dart';
import 'math.dart';
import 'utils/color_utils.dart';
import 'utils/utils.dart';

typedef Color = int;
typedef Score = double;
List<Color> score(Map<Color, int> colorsToPopulation) {
  int populationSum = 0;
  for (final population in colorsToPopulation.values)
    populationSum += population;
  final colorsToProportion = <Color, double>{},
      colorsToCam = <Color, CAM16>{},
      hueProportions = List.filled(360, 0.0);
  for (final e in colorsToPopulation.entries) {
    final color__tsickle_destructured_1 = e.key,
        population__tsickle_destructured_2 = e.value;
    final color = color__tsickle_destructured_1,
        proportion = population__tsickle_destructured_2 / populationSum;
    colorsToProportion[color] = proportion;
    final cam = CAM16.fromIntInViewingConditions(color);
    colorsToCam[color] = cam;
    hueProportions[Math.round(cam.hue)] += proportion;
  }
  final colorsToExcitedProportion = <Color, double>{};
  for (final e in colorsToCam.entries) {
    final color__tsickle_destructured_3 = e.key,
        cam__tsickle_destructured_4 = e.value;
    final color = color__tsickle_destructured_3,
        hue = Math.round(cam__tsickle_destructured_4.hue);
    var excitedProportion = 0.0;
    for (var i = hue - 15; i < hue + 15; i++)
      excitedProportion +=
          hueProportions[math_utils_sanitizeDegrees(i).round()];
    colorsToExcitedProportion[color] = excitedProportion;
  }
  final colorsToScore = <Color, Score>{};
  for (final e in colorsToCam.entries) {
    final color__tsickle_destructured_5 = e.key,
        cam__tsickle_destructured_6 = e.value;
    final color = color__tsickle_destructured_5,
        cam = cam__tsickle_destructured_6,
        proportionScore = 70 * colorsToExcitedProportion[color]!;
    colorsToScore[color] =
        proportionScore + (cam.chroma - 48) * (48 > cam.chroma ? 0.1 : 0.3);
  }
  final filteredColors = filter(colorsToExcitedProportion, colorsToCam),
      dedupedColorsToScore = new Map<Color, Score>();
  for (final color in filteredColors) {
    var duplicateHue = false;
    final hue = colorsToCam[color]!.hue;
    for (final alreadyChosenColor__tsickle_destructured_7
        in dedupedColorsToScore.keys) {
      final alreadyChosenHue =
          colorsToCam[alreadyChosenColor__tsickle_destructured_7]!.hue;
      if (15 > 180 - Math.abs(Math.abs(hue - alreadyChosenHue) - 180)) {
        duplicateHue = true;
        break;
      }
    }
    if (!duplicateHue) {
      dedupedColorsToScore[color] = colorsToScore[color]!;
    }
  }
  final colorsByScoreDescending = dedupedColorsToScore.entries.toList();
  colorsByScoreDescending
      .sort((first, second) => second.value.compareTo(first.value));
  final answer = colorsByScoreDescending.map((entry) => entry.key).toList();
  if (answer.isEmpty) {
    answer.add(0xff4285f4);
  }
  return answer;
}

List filter(
    Map<int, double> colorsToExcitedProportion, Map<Color, CAM16> colorsToCam) {
  final filtered = [];
  for (final e in colorsToCam.entries) {
    final color__tsickle_destructured_8 = e.key,
        cam__tsickle_destructured_9 = e.value;
    final color = color__tsickle_destructured_8,
        cam = cam__tsickle_destructured_9,
        proportion = colorsToExcitedProportion[color]!;
    if (15 <= cam.chroma && 10 <= lstarFromInt(color) && 0.01 <= proportion) {
      filtered.add(color);
    }
  }
  return filtered;
}
