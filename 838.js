// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript
function catchSignChange(arr) {
  if (arr.length <= 1) return 0
  let result = 0
  let lastSign = arr[0] >= 0

  for (let i = 1; i < arr.length; i++) {
    if (lastSign) {
      if (arr[i] < 0) {
        result += 1
        lastSign = false
      }
    } else {
      if (arr[i] >= 0) {
        result += 1
        lastSign = true
      }
    }
  }

  return result
}

catchSignChange([1, 3, 4, 5])
