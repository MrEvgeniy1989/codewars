// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
function isPowerOfTwo(n) {
  if (n === 1) return true
  if (n === 0) return false

  for (let i = 2; i <= n; i *= 2) {
    if (i === n) return true
  }

  return false
}

isPowerOfTwo(2)
isPowerOfTwo(4096)
isPowerOfTwo(5)
