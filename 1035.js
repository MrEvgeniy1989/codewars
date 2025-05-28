function countOnes(n) {
  return n
    .toString(2)
    .split("")
    .filter(function (d) {
      return d === "1"
    }).length
}

function convertBits(a, b) {
  return countOnes(a ^ b)
}
