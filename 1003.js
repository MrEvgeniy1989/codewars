function geometricSequenceElements(a, r, n) {
  const res = [a]
  for (let i = 0; i < n - 1; i++) {
    res.push(res[i] * r)
  }
  return res.join(", ")
}
