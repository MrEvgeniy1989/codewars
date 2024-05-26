// https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript
function sevenAte9(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "9" && str[i - 1] === "7" && str[i + 1] === "7") {
      str = str.slice(0, i) + str.slice(i + 1)
    }
  }

  return str
}

sevenAte9("7979797")
