// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      age1 * age1 + age2 * age2 + age3 * age3 + age4 * age4 + age5 * age5 + age6 * age6 + age7 * age7 + age8 * age8,
    ) / 2,
  )
}

predictAge(65, 60, 75, 55, 60, 63, 64, 45)
