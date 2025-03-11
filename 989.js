function dative(word) {
  return /[aáoóuú]/.test(word) ? word + "nak" : word + "nek"
}
