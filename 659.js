// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
function repeats(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1)
  }

  let result = Object.entries(obj).reduce((acc, el) => (el[1] === 1 ? (acc += +el[0]) : acc), 0)

  return result
}

repeats([4, 5, 7, 5, 4, 8])
