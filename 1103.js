const countBits = (num, val) => num.toString("2").split(val).length - 1

function bitsBattle(numbers) {
  let totals = [0, 0]

  for (let num of numbers) if (num) totals[num % 2] += countBits(num, num % 2)

  let diff = totals[0] - totals[1]

  return diff > 0 ? "evens win" : diff < 0 ? "odds win" : "tie"
}
