// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
let encryptThis = function (text) {
  return text
    .split(" ")
    .map((word) => {
      if (word.length === 2) {
        return word.charCodeAt(0).toString() + word[1]
      } else if (word.length > 2) {
        return word.charCodeAt(0).toString() + word[word.length - 1] + word.substring(2, word.length - 1) + word[1]
      } else {
        return word.charCodeAt(0).toString()
      }
    })
    .join(" ")
}

encryptThis("A wise old owl lived in an oak")
