// https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript
function absentVowel(x) {
  const VOWELS = ["a", "e", "i", "o", "u"]

  for (let i = VOWELS.length - 1; i >= 0; i--) {
    if (!x.includes(VOWELS[i])) {
      return i
    }
  }
}

absentVowel("John Doe hs seven red pples under his bsket")
