// https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript
function getStrings(city) {
  city = city.toLowerCase()
  let obj = {}
  let str = ""

  for (let elem of city) {
    if (!(elem in obj)) {
      obj[elem] = "*"
    } else {
      obj[elem] += "*"
    }
  }

  for (let key in obj) {
    if (key !== " ") {
      str += key + ":" + obj[key] + ","
    }
  }

  return str.substring(0, str.length - 1)
}
