import 'package:libmonet/libmonet.dart';
import 'package:theme_generator/theme_generator.dart';

void main(List<String> arguments) {
  final adapter = ThemeAdapter.fromColor('#deadbe', true);
  final theme = adapter.save();
  print(theme);
}
