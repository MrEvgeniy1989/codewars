// https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript
function getAverageAge(list) {
  return Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length)
}
