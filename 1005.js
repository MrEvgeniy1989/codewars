function uncensor(infected, discovered) {
  const arr = [...discovered]
  return [...infected].map((el) => (el === "*" ? arr.shift() : el)).join("")
}
