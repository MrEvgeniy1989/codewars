// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
function sumNoDuplicates(numList) {
  return numList.filter((x) => numList.indexOf(x) === numList.lastIndexOf(x)).reduce((accum, val) => accum + val, 0)
}
