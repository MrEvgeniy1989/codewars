// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
function sumPairs(ints, s) {
  const seenNumbers = new Set()

  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i]

    if (seenNumbers.has(complement)) {
      return [complement, ints[i]]
    }

    seenNumbers.add(ints[i])
  }

  return undefined
}

sumPairs([1, -2, 3, 0, -6, 1], -6)
sumPairs([20, -13, 40], -7)
sumPairs([1, 4, 8, 7, 3, 15], 8)
