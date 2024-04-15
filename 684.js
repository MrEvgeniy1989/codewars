function maxTriSum(numbers) {
  const nums = Array.from(new Set(numbers.sort((a, b) => b - a)))

  let sum = 0

  for (let i = 0; i < 3; i++) {
    sum += nums[i]
  }

  return sum
}

maxTriSum([3, 2, 6, 8, 2, 3])
