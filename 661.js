// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
function solve(arr) {
  if (arr.length < 1) return []
  let result = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    let index = result.findIndex((el) => el === arr[i])
    if (index !== -1) {
      result.splice(index, 1)
    }
    result.push(arr[i])
  }

  return result
}

solve([3, 4, 4, 3, 6, 3])
