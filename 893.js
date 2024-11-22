// https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript
function modifyMultiply(str, loc, num) {
  let result = ""
  const strArr = str.split(" ")

  for (let i = 0; i < num; i++) {
    result += strArr[loc] + "-"
  }

  return result.slice(0, -1)
}

modifyMultiply("This is a string", 3, 5)
