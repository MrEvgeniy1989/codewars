// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
const orderedCount = function (text) {
  if (text.length === 0) return []
  let result = []

  for (let i = 0; i < text.length; i++) {
    let letter = text[i]
    text = text.replace(letter, "")
    i -= 1
    let count = 1
    for (let j = 0; j < text.length; j++) {
      if (letter === text[j]) {
        count++
        text = text.replace(text[j], "")
        j -= 1
      }
    }
    result.push([letter, count])
  }

  return result
}

orderedCount("abracadabra") //[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
