// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript
function save(sizes, hd) {
  let i = -1
  while (hd >= 0) {
    hd -= sizes.shift()
    i++
  }
  return i
}
