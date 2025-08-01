function solve(s, k) {
  const abc = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < abc.length; i += 1) {
    while (s.includes(abc[i]) && k > 0) {
      s = s.replace(abc[i], "")
      k -= 1
    }
  }

  return s
}
