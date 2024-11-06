// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript
function scrollingText(text) {
  let result = []

  for (let i = 0; i < text.length; i++) {
    result.push((text.slice(i) + text.slice(0, i)).toUpperCase())
  }

  return result
}
