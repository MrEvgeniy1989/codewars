// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
function vowelIndices(word) {
  let result = []

  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[aeiouy]/i)) {
      result.push(i + 1)
    }
  }

  return result
}

vowelIndices("apple")
vowelIndices("super")
