// https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript
function splitTheBill(x) {
  let average = 0
  let count = 0

  for (let item in x) {
    average += x[item]
    count++
  }
  average = average / count

  for (let item in x) {
    x[item] = Math.round((x[item] - average) * 100) / 100
  }

  return x
}
