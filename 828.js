// https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript
function product(string) {
  let exclamationMarks = 0
  let questionMarks = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "!") {
      exclamationMarks += 1
    }
    if (string[i] === "?") {
      questionMarks += 1
    }
  }

  return exclamationMarks * questionMarks
}
