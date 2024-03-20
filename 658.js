// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript
function hasUniqueChars(str) {
  let strObj = {}
  for (let i = 0; i < str.length; i++) {
    if (strObj.hasOwnProperty(str[i])) {
      return false
    }
    strObj[str[i]] = 1
  }
  return true
}
