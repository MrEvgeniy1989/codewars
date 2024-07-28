function compare(s1, s2) {
  function sum(s) {
    let a = (s || "").toUpperCase().split("")
    return a.every((v) => /[A-Z]/.test(v)) ? a.reduce((r, v) => r + v.codePointAt(0), 0) : 0
  }

  return sum(s1) === sum(s2)
}
