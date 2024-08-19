// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
function validateWord(s, c = s.toLowerCase()) {
  return c.length % new Set(c).size === 0
}
