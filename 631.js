// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript
function bump(x) {
  let count = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      count += 1
    }
    if (count === 16) {
      return "Car Dead"
    }
  }

  return "Woohoo!"
}

bump("__nn_nnnn__n_n___n____nn__nnn")
bump("_nnnnnnn_n__n______nn__nn_nnn")
