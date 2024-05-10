// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript
function mygcd(x, y) {
  while (y !== 0) {
    let temp = y
    y = x % y
    x = temp
  }
  return x
}

mygcd(30, 12)
