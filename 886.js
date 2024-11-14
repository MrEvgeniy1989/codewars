// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript
function chain(v, fns) {
  return fns.reduce(function (v, fn) {
    return fn(v)
  }, v)
}
