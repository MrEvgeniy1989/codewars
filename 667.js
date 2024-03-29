// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript
function halvingSum(n) {
  let result = n

  while (n !== 1) {
    n = Math.floor(n / 2)
    result += n
  }

  return result
}

halvingSum(25)
