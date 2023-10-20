// https://www.codewars.com/kata/57c6b44f58da9ea6c20003da/train/javascript
function geo_mean(nums, arith_mean, length = nums.length + 1) {
    let number = arith_mean * length - nums.reduce((acc, curr) => acc + curr, 0)
    return (nums.reduce((acc, curr) => acc * curr, 1) * number) ** (1 / length)
}