const lengthOfSequence = (arr, n) =>
  arr.filter((val) => val === n).length === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0
