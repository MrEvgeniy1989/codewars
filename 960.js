function testResult(array) {
  let avg = (array.reduce((a, b) => a + b) / array.length).toFixed(3)
  let h = array.filter((a) => a > 8).length
  let l = array.filter((b) => b < 7).length
  let a = array.filter((c) => c > 6 && c < 9).length
  let result = [Number(avg), { h: h, a: a, l: l }]
  return l === 0 && a === 0 && h !== 0 ? result.concat(["They did well"]) : result
}
