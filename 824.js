// https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript
function filterLongWords(sentence, n) {
  const words = sentence.split(" ")
  return words.filter((word) => word.length > n)
}
