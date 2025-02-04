function rangeBitCount(a, b) {
  let sum = 0
  for (let i = a; i <= b; i++) sum += i.toString(2).split("1").length - 1
  return sum
}
