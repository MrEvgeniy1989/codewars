// https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript
function mergeArrays(a, b) {
  const newArr = a.concat(b).sort((a, b) => a - b)
  return [...new Set(newArr)]
}

mergeArrays([1, 3, 5], [2, 4, 6])
