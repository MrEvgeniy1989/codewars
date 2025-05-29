function sortDict(dict) {
  return Object.keys(dict)
    .map(function (v) {
      return [+v || v, dict[v]]
    })
    .sort((a, b) => b[1] - a[1])
}
