// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript
function validSpacing(s) {
  return s.trim() === s && !s.includes("  ")
}
