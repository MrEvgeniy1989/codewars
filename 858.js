// https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript
function findMissingNumber(sequence) {
  if (sequence === "") return 0
  if (!/^(\d+ )+\d+$/gi.test(sequence)) return 1
  const arr = sequence.split(" ").map((x) => +x)
  const max = Math.max(...arr)
  for (let i = 1; i < max; ++i) if (arr.find((x) => x === i) === undefined) return i
  return 0
}
