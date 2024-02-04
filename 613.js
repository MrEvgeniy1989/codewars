// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript
function revrot(str, sz) {
  if (sz <= 0 || str === "" || sz > str.length) return ""
  let result = ""

  for (let i = 0; i < str.length; i += sz) {
    let currentStr = str.substring(i, i + sz)
    if (sz > currentStr.length) return result
    let currentStrArr = currentStr.split("")
    let sumOfTheCubes = currentStrArr.reduce((acc, el) => acc + Math.pow(+el, 3), 0)
    if (sumOfTheCubes % 2 === 0) {
      result += currentStrArr.reverse().join("")
    } else {
      result += currentStr.substring(1) + currentStr.substring(0, 1)
    }
  }
  return result
}

revrot("373440769246728874779685133977843381307263187122", 16)
revrot("1234", 0)
revrot("733049910872815764", 5)
