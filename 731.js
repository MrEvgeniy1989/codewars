// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
function isSameLanguage(list) {
  for (const listElement of list) {
    if (listElement.language !== list[0].language) {
      return false
    }
  }
  return true
}
