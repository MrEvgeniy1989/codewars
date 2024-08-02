// https://www.codewars.com/kata/5299413901337c637e000004/train/javascript
function getMissingElement(superImportantArray) {
  return superImportantArray.reduce((sum, value) => sum - value, 45)
}
