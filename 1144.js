function scoreTest(str, right, omit, wrong) {
  var grades = [right, omit, -wrong]
  return str.reduce(function (sum, score) {
    return sum + grades[score]
  }, 0)
}
