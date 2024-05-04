// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript
function incrementer(nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + i + 1
    if (sum <= 9) {
      result.push(sum)
    } else {
      const s = String(sum)
      result.push(+s[s.length - 1])
    }
  }
  return result
}

incrementer([1, 2, 3])
