// https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript
const filterLucky = (x) => {
  let result = []
  for (let i = 0; i < x.length; i++) {
    if (x[i].toString().includes("7")) {
      result.push(x[i])
    }
  }
  return result
}

filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])
