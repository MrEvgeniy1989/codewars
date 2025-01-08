function noRepeat(str) {
  for (const i of str) if (str.split(i).length === 2) return i
}
