// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
let filterString = function (value) {
  return Number(value.replace(/[^\d]/g, ""))
}

filterString("a1b2c3") // 123
