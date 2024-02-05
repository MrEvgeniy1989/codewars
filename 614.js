//https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript
const findMissing = function (list) {
  let difference = Math.min(list[1] - list[0], list[list.length - 1] - list[list.length - 2])

  for (let i = 1; i < list.length; i++) {
    if (list[i] - difference !== list[i - 1]) {
      console.log(list[i] - difference)
      return list[i] - difference
    }
  }
}

findMissing([0, -5, -10, -15, -20, -30, -35])
findMissing([1, 3, 4])
findMissing([1, 3, 5, 9, 11])
