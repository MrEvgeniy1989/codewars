// https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript
function doubleEveryOther(a) {
  let result = []

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 1) {
      result.push(a[i] * 2)
    } else {
      result.push(a[i])
    }
  }

  return result
}

doubleEveryOther([1, 2, 3, 4])
