// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
function removeConsecutiveDuplicates(string) {
  if (string.length < 1) return ""
  const arrString = string.split(" ")
  let result = arrString[0]

  for (let i = 1; i < arrString.length; i++) {
    if (arrString[i] === arrString[i - 1]) continue
    result += " " + arrString[i]
  }

  return result
}

removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")
