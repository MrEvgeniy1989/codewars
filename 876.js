// https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript
function dominator(arr) {
  arr.sort()
  let i = 0,
    v = 0,
    c = 0
  for (; i < arr.length; i++) {
    if (v === arr[i]) c++
    else {
      v = arr[i]
      c = 1
    }
    if (c > arr.length / 2) return v
  }
  return -1
}
