import 'dart:typed_data';

import 'package:example/color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/flutter_monet_theme.dart';
import 'package:monet_theme/monet_theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData.from(
        colorScheme: baseline_3p.light.toColorScheme(),
        textTheme: generateTextTheme(),
      ),
      darkTheme: ThemeData.from(
        colorScheme: baseline_3p.dark.toColorScheme(),
        textTheme: generateTextTheme(),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  static const _kInnerGutter = 8.0;
  final seed = inferSeedFromPixels(Uint32List.fromList([
    0xFF00FF00,
    0xFF00ee00,
    0xFF00ee00,
    0xFF0000FF,
  ]));
  MonetTheme get theme => _counter == 0
      ? generateTheme(Color(seed))
      : _counter.isEven
          ? baseline_1p
          : baseline_3p;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Example'),
      ),
      body: ListView(
        padding: const EdgeInsets.symmetric(
          horizontal: 36,
          vertical: 36,
        ),
        children: [
          Text(
            'Your Theme',
            style: Theme.of(context).textTheme.headline1,
          ),
          SizedBox(height: 3 * _kInnerGutter),
          Text(
            'Light Theme',
            style: Theme.of(context).textTheme.headline5,
          ),
          SizedBox(height: _kInnerGutter),
          MonetColorSchemeWidget(scheme: theme.light),
          SizedBox(height: 2 * _kInnerGutter),
          Text(
            'Dark Theme',
            style: Theme.of(context).textTheme.headline6,
          ),
          SizedBox(height: _kInnerGutter),
          MonetColorSchemeWidget(scheme: theme.dark),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.refresh),
        onPressed: _incrementCounter,
      ),
    );
  }
}
