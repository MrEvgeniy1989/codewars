function singleDigit(n) {
  while (n > 9) {
    n = n.toString(2).replace(/0/g, "").length
  }
  return n
}
