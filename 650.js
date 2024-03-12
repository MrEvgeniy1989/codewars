// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
function divCon(x) {
  let sumNumbers = 0
  let sumStrs = 0
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      sumNumbers += x[i]
    } else {
      sumStrs += Number(x[i])
    }
  }
  return sumNumbers - sumStrs
}

divCon([9, 3, "7", "3"])
divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])
