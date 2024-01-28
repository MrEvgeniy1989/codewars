// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
multiplicationTable = function (size) {
  let result = []

  for (let i = 0; i < size; i++) {
    result[i] = []
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1)
    }
  }

  return result
}

multiplicationTable(3)
