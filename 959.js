const wordPattern = (word) => {
  word = word.toLowerCase()
  const set = [...new Set(word)]
  return word
    .split("")
    .map((e) => set.indexOf(e))
    .join(".")
}
