function explode(x) {
  let [a, b] = x

  if (typeof a == "number" && typeof b == "number") return new Array(a + b).fill(x)
  else if (typeof a == "number") return new Array(a).fill(x)
  else if (typeof b == "number") return new Array(b).fill(x)

  return "Void!"
}
