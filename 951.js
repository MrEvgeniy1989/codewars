function testit(a, b) {
  a = [...new Set(a)]
  b = [...new Set(b)]
  return a.concat(b).sort(function (c, d) {
    return c - d
  })
}
