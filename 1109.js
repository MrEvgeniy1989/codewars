function ultimateReverse(words) {
  let reversed = [...words.join("")].reverse()
  return words.map((word) => reversed.splice(0, word.length).join(""))
}
