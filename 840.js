// https://www.codewars.com/kata/5701e43f86306a615c001868/train/javascript
function getIssuer(number) {
  const num = number.toString()
  const num1 = num.substr(0, 2)
  const num2 = num.substr(0, 4)
  const num3 = num.substr(0, 1)
  if ((num1 === "34" || num1 === "37") && num.length === 15) {
    return "AMEX"
  } else if (num1 >= "51" && num1 <= "55" && num.length === 16) {
    return "Mastercard"
  } else if (num2 === "6011" && num.length === 16) {
    return "Discover"
  } else if (num3 === "4" && (num.length === 13 || num.length === 16)) {
    return "VISA"
  } else {
    return "Unknown"
  }
}
