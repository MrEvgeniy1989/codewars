// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
function goodVsEvil(good, evil) {
  good = good.split(" ").map((el) => +el)
  evil = evil.split(" ").map((el) => +el)
  const worthGood = good[0] + good[1] * 2 + good[2] * 3 + good[3] * 3 + good[4] * 4 + good[5] * 10
  const worthEvil = evil[0] + evil[1] * 2 + evil[2] * 2 + evil[3] * 2 + evil[4] * 3 + evil[5] * 5 + evil[6] * 10

  const result =
    worthGood > worthEvil
      ? "Battle Result: Good triumphs over Evil"
      : worthEvil > worthGood
        ? "Battle Result: Evil eradicates all trace of Good"
        : "Battle Result: No victor on this battle field"

  return result
}

goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0")
goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1")
