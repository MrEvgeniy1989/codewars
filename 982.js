function eliminateUnsetBits(number) {
  return parseInt(number.replace(/0/g, "") || 0, 2)
}
