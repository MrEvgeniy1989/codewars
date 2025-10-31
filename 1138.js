function hammingWeight(x) {
  return x ? (x % 2) + hammingWeight(x >> 1) : x
}
