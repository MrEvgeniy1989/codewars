const gcd = (a, b) => (b ? gcd(b, a % b) : a)

const reduce = ([a, b]) => {
  let d = gcd(a, b)
  return [a / d, b / d]
}
