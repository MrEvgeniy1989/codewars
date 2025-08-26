function randomCase(x) {
  return x
    .split("")
    .map(function (e) {
      return Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase()
    })
    .join("")
}
