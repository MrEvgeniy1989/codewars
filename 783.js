// https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript
function createDict(keys, values) {
  const obj = {}

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null
  }

  return obj
}
