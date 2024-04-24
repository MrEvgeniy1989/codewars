// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
function solve(s) {
  let uppercase = 0
  let lowercase = 0
  let numbers = 0
  let specialCharacters = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[A-Z]/)) {
      uppercase += 1
    } else if (s[i].match(/[a-z]/)) {
      lowercase += 1
    } else if (s[i].match(/[0-9]/)) {
      numbers += 1
    } else specialCharacters += 1
  }

  return [uppercase, lowercase, numbers, specialCharacters]
}

solve("aAbBcC")
