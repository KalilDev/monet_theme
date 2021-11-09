import 'package:example/color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/flutter_monet_theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
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
  MonetTheme get theme => _counter.isEven ? baseline_1p : baseline_3p;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        padding: const EdgeInsets.symmetric(
          horizontal: 36,
          vertical: 36,
        ),
        children: [
          Text(
            'Your Theme',
            style: Theme.of(context).textTheme.headline3,
          ),
          SizedBox(height: 3 * _kInnerGutter),
          Text(
            'Light Theme',
            style: Theme.of(context).textTheme.headline6,
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
