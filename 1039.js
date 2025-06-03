function sentencify(words) {
  return words.join(" ").replace(/^[a-z]/, (m) => m.toUpperCase()) + "."
}
