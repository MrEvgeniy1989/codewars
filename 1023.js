function convert(number) {
  return String.fromCharCode(...number.match(/../g))
}
