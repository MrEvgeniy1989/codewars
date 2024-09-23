// https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
function consonantCount(str) {
  console.log(str)
  if (str.length < 1) return 0
  const letters = str.match(/[a-zA-Z]/gi) ?? []
  const result = letters.join("").match(/[^aeiou]/gi) ?? []
  return result.length
}

consonantCount("01234567890_")
