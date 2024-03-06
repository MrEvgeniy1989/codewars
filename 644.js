// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
function switcheroo(x) {
  let result = ""
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      result += "b"
    } else if (x[i] === "b") {
      result += "a"
    } else {
      result += x[i]
    }
  }
  return result
}
