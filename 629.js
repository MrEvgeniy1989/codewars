// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
function cleanString(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      if (i === 0) {
        s = s.slice(i + 1)
        i = i - 1
      } else {
        s = s.slice(0, i - 1) + s.slice(i + 1)
        i = i - 2
      }
    }
  }
  return s
}

cleanString("abc####d##c#")
cleanString("abc#d##c")
