class quantizer_wsmeans_DistanceAndIndex {
  int index = -1;
  num distance = -1;
}

class quantizer_wu_Box {
  int vol = 0, b1 = 0, b0 = 0, g1 = 0, g0 = 0, r1 = 0, r0 = 0;
}

class quantizer_wu_CreateBoxesResult {
  final int resultCount;
  quantizer_wu_CreateBoxesResult(this.resultCount);
}

class quantizer_wu_MaximizeResult {
  final cutLocation;
  final num maximum;
  quantizer_wu_MaximizeResult(this.cutLocation, this.maximum);
}
