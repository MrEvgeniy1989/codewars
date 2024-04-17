// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const min = Math.min(...arr)
  const indexOfMin = arr.findIndex((el) => el === min)

  return toReturn === "value" ? min : indexOfMin
}

min([1, 2, 3, 4, 5], "value")
min([1, 2, 3, 4, 5], "index")
