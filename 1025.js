function golfScoreCalculator(parList, scoreList) {
  result = 0
  for (let i = 0; i < parList.length; ++i) {
    result += scoreList[i] - parList[i]
  }
  return result
}
