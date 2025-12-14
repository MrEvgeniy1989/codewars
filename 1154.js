function shuffledArray(shuffled) {
  shuffled.splice(shuffled.indexOf(shuffled.reduce((sum, e) => sum + e) / 2), 1)
  return shuffled.sort((a, b) => a - b)
}
