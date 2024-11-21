// https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript
function solve(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let indicator = false

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        indicator = true
        break
      }
    }

    if (!indicator) {
      result.push(arr[i])
    }
  }

  return result
}
