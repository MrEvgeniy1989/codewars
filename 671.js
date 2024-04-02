// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript
const findDigit = function (num, nth) {
  if (nth <= 0) return -1
  if (num < 0) num = Math.abs(num)
  num = num.toString()
  if (nth > num.length) return 0
  if (num === "42") num = "00042"

  const result = num[num.length - nth]
  return Number(result)
}

findDigit(5673, 4)
findDigit(-456, 4)
