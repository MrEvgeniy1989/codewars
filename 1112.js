function solve(str) {
  let maxDiff = 0,
    result = "z"
  for (let el of str) {
    let diff = str.lastIndexOf(el) - str.indexOf(el)
    if (maxDiff < diff || (maxDiff === diff && el <= result)) {
      result = el
      maxDiff = diff
    }
  }
  return result
}
