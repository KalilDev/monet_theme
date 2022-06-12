import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/flutter_monet_theme.dart';

class MonetColorSchemeWidget extends StatelessWidget {
  final MonetColorScheme scheme;
  const MonetColorSchemeWidget({
    Key? key,
    required this.scheme,
  }) : super(key: key);

  static const _kRadius = Radius.circular(24);
  static const _kOutlineWidth = 1.0;
  static const _kGutter = 8.0;
  static const _kInnerLeftMargin = 12.0;
  static const _kInnerTopMargin = 16.0;
  static const _kHeight = 56.0;
  static const _kHeightHeader = _kHeight * 2.5;

  BorderSide get border =>
      BorderSide(color: scheme.outline, width: _kOutlineWidth);

  Widget section(
    Widget left,
    Widget right, [
    double height = _kHeight,
  ]) =>
      SizedBox(
        height: height,
        child: Row(
          children: [
            Expanded(child: left),
            Expanded(child: right),
          ],
        ),
      );

  Widget _color(String name, Color color, Color on, BorderRadius? radius) =>
      SizedBox.expand(
        child: Material(
          color: color,
          shape: RoundedRectangleBorder(
            side: border,
            borderRadius: radius ?? BorderRadius.zero,
          ),
          child: Padding(
            padding: EdgeInsets.only(
              top: _kInnerTopMargin,
              left: _kInnerLeftMargin,
            ),
            child: Text(
              name,
              style: TextStyle(color: on),
            ),
          ),
        ),
      );
  Widget _two(String name, Color color, Color on,
          {BorderRadius? left, BorderRadius? right}) =>
      Row(
        children: [
          Expanded(child: _color(name, color, on, left)),
          Expanded(child: _color('On $name', on, color, right))
        ],
      );

  @override
  Widget build(BuildContext context) => Column(
        children: [
          section(
            _two(
              'Primary',
              scheme.primary,
              scheme.onPrimary,
              left: const BorderRadius.only(
                topLeft: _kRadius,
              ),
            ),
            _two(
              'Primary Container',
              scheme.primaryContainer,
              scheme.onPrimaryContainer,
              right: const BorderRadius.only(
                topRight: _kRadius,
              ),
            ),
            _kHeightHeader,
          ),
          SizedBox(height: _kGutter),
          section(
            _two(
              'Secondary',
              scheme.secondary,
              scheme.onSecondary,
            ),
            _two(
              'Secondary Container',
              scheme.secondaryContainer,
              scheme.onSecondaryContainer,
            ),
          ),
          SizedBox(height: _kGutter),
          section(
            _two(
              'Tertiary',
              scheme.tertiary,
              scheme.onTertiary,
            ),
            _two(
              'Tertiary Container',
              scheme.tertiaryContainer,
              scheme.onTertiaryContainer,
            ),
          ),
          SizedBox(height: _kGutter),
          section(
            _two(
              'Error',
              scheme.error,
              scheme.onError,
            ),
            _two(
              'Error Container',
              scheme.errorContainer,
              scheme.onErrorContainer,
            ),
          ),
          SizedBox(height: _kGutter),
          section(
            _two(
              'Background',
              scheme.background,
              scheme.onBackground,
            ),
            _two(
              'Surface',
              scheme.surface,
              scheme.onSurface,
            ),
          ),
          SizedBox(height: _kGutter),
          section(
            _two(
              'Surface-variant',
              scheme.surfaceVariant,
              scheme.onSurfaceVariant,
              left: const BorderRadius.only(
                bottomLeft: _kRadius,
              ),
            ),
            _color(
              'Outline',
              scheme.outline,
              scheme.surface,
              const BorderRadius.only(
                bottomRight: _kRadius,
              ),
            ),
          ),
        ],
      );
}
