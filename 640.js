// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
function findLongest(array) {
  let result = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().split("").length > result.toString().split("").length) {
      result = array[i]
    }
  }

  return result
}

findLongest([1, 10, 100])
findLongest([9000, 8, 800])
findLongest([8, 900, 500])
