// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript
function parse(data) {
  let result = []
  let value = 0
  const dataArr = data.split("")

  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i] === "i") value += 1
    if (dataArr[i] === "d") value -= 1
    if (dataArr[i] === "s") value *= value
    if (dataArr[i] === "o") result.push(value)
  }

  return result
}

parse("iiisdoso")
parse("iiisxxxdoso")
