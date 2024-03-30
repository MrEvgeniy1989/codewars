// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
function cubeOdd(arr) {
  const isNumeric = arr.some((el) => isNaN(el))
  return isNumeric ? undefined : arr.filter((el) => el % 2 !== 0).reduce((acc, el) => acc + Math.pow(el, 3), 0)
}

cubeOdd(["a", 1, 2, 3, 4])
