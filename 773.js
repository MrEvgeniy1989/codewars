// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript
function minimumSteps(numbers, value) {
  const nums = numbers.slice().sort((a, b) => a - b)
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum >= value) {
      return i
    }
  }
}
