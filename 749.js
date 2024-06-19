// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
function largest(n, xs) {
  return xs
    .sort(function (a, b) {
      return a - b
    })
    .slice(xs.length - n)
}
