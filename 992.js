function mod256WithoutMod(number) {
  if (number < 0) {
    return -mod256WithoutMod(-number)
  }
  return number & 255
}
