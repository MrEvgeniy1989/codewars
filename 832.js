// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript
function nextHappyYear(year) {
  let newYear = year + 1
  let arr = newYear.toString().split("")
  if (arr.join("") === Array.from(new Set(arr)).join("")) return newYear
  else return nextHappyYear(newYear)
}
