// https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript
function remove(string) {
  let result = []
  const strArr = string.split(" ")
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].split("!").length !== 2) {
      result.push(strArr[i])
    }
  }

  return result.join(" ")
}

remove("Hi! Hi!")
