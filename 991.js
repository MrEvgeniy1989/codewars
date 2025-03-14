function calculate(string) {
  return eval(
    string
      .replace("loses", "-")
      .replace("gains", "+")
      .replace(/[a-zA-Z]/g, ""),
  )
}
