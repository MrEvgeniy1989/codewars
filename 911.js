const vampire_test = function (a, b) {
  let origDigits = String(a) + String(b),
    prodDigits = String(a * b)

  origDigits = origDigits.split("").sort().join("")
  prodDigits = prodDigits.split("").sort().join("")

  return prodDigits === origDigits
}
