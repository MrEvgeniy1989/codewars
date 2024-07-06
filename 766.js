// https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript
function insertDash(num) {
  let numCopy = num.toString()
  for (let i = 0; i < numCopy.length - 1; i++) {
    if (numCopy[i] % 2 !== 0 && numCopy[i + 1] % 2 !== 0) {
      numCopy = numCopy.slice(0, i + 1) + "-" + numCopy.slice(i + 1)
      i++
    }
  }
  return numCopy
}

insertDash(454793)
