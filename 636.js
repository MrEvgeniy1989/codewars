// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
function sumCubes(n) {
  let result = 0

  for (let i = 1; i <= n; i++) {
    result += i ** 3
  }

  return result
}
