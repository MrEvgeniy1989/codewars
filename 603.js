// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
function titleCase(title, minorWords) {
  if (title === "") {
    return ""
  }
  title = title.toLowerCase()
  const minorWordsArr = minorWords?.toLowerCase().split(" ")

  let words = title.split(" ")
  let result = words[0][0].toUpperCase() + words[0].substring(1)
  for (let i = 1; i < words.length; i++) {
    if (minorWordsArr && minorWordsArr.includes(words[i])) {
      result += " " + words[i]
    } else {
      result += " " + words[i][0].toUpperCase() + words[i].substring(1)
    }
  }

  return result
}

titleCase("First a of in", "an often into")
titleCase("a clash of KINGS", "a an the of")
titleCase("THE WIND IN THE WILLOWS", "The In")
titleCase("the quick brown fox")
