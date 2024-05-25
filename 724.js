// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript
function vowel2index(str) {
  const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  let result = str

  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i])) {
      result = result.replace(str[i], i + 1)
    }
  }

  return result
}

vowel2index("this is my string")
