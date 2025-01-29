function decode(code, n) {
  const key = String(n)
  return String.fromCharCode(...code.map((c, i) => c - Number(key[i % key.length]) + 96))
}
