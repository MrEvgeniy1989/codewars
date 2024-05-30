// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript
function sumOfN(n) {
  console.log(n)
  let result = []
  let sum = 0

  if (n > 0) {
    for (let i = 0; i <= n; i++) {
      sum += i
      result.push(sum)
    }
  } else {
    for (let i = 0; i >= n; i--) {
      sum += i
      result.push(sum)
    }
  }

  return result
}

sumOfN(-4)
sumOfN(3)
