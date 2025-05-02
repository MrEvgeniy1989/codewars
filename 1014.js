function scrabbleScore(str) {
  return str
    .toUpperCase()
    .split("")
    .reduce(function (score, v) {
      return score + ($dict[v] || 0)
    }, 0)
}
