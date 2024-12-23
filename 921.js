function isItANum(str) {
  let number = str.replace(/\D/g, "")

  if (number[0] !== "0" || number.length !== 11) {
    return "Not a phone number"
  }

  return number
}
