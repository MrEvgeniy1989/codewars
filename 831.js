// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript
function findDup(arr) {
  const arrSort = arr.sort((a, b) => a - b)

  for (let i = 0; i < arrSort.length; i++) {
    if (arrSort[i] === arrSort[i + 1]) {
      return arrSort[i]
    }
  }
}
