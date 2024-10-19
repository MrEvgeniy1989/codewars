// https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/javascript
function collatz(n) {
  if (n === 1) return 1
  if (n % 2 === 0) {
    return 1 + collatz(n / 2)
  } else {
    return 1 + collatz(n * 3 + 1)
  }
}

collatz(20)
