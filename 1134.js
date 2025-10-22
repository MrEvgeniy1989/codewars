const remainder = function (D, d) {
  return d === 0 ? "NaN" : D - Math.floor(D / d) * d
}
