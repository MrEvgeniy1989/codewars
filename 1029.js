function scramble(s, a) {
  return a.map((_, i) => s[a.indexOf(i)]).join``
}
