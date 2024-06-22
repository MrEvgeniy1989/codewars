// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript
function toTime(time) {
  const h = Math.floor(time / 3600)
  const m = Math.floor((time % 3600) / 60)
  return h + " hour(s) and " + m + " minute(s)"
}
