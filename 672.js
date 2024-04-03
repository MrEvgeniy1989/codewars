// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
function findDeletedNumber(arr, mixArr) {
  if (mixArr.length === arr.length) return 0

  for (let i = 0; i < arr.length; i++) {
    if (!mixArr.includes(arr[i])) return arr[i]
  }
}

findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])
findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
