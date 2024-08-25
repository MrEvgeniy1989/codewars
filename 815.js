// https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript
function tripleX(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      return str[i + 1] === "x" && str[i + 2] === "x"
    }
  }

  return false
}
