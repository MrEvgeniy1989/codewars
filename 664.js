// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
function gps(s, x) {
  let max = 0

  for (let i = 1; i < x.length; i++) {
    const speed = (3600 * (x[i] - x[i - 1])) / s
    max = Math.max(max, speed)
  }
  return Math.floor(max)
}
