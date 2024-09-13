// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
function getAges(sum, difference) {
  console.log(sum, difference)
  if (sum < 0 || difference < 0) return null
  const age1 = sum / 2 + difference / 2
  const age2 = sum / 2 - difference / 2
  if (age1 < 0 || age2 < 0) return null

  return [age1, age2]
}
