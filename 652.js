// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
function solve(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toLowerCase() === alphabet[j]) {
        count++
      }
    }
    result.push(count)
  }
  return result
}

solve(["abode", "ABc", "xyzD"])
