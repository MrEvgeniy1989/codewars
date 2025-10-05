function uglifyWord(s) {
  return s.replace(/[a-z]+/gi, (x) => x.split``.map((y, i) => (i % 2 ? y.toLowerCase() : y.toUpperCase())).join``)
}
