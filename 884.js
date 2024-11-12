// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript
function mean(lst) {
  let num = 0,
    str = ""
  lst.forEach((n) => {
    if (!isNaN(n)) {
      num += +n
    } else {
      str += n
    }
  })
  return [num / 10, str]
}
