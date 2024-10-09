// https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript
function freqSeq(str, sep) {
  const letters = {}
  let result = []
  const lettersOfStr = str.split("")
  lettersOfStr.forEach((el) => (letters[el] ? (letters[el] += 1) : (letters[el] = 1)))

  for (let i = 0; i < lettersOfStr.length; i++) {
    result.push(letters[lettersOfStr[i]])
  }

  return result.join(sep)
}

freqSeq("hello world", "-")
freqSeq("19999999", ":")
