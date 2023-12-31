// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
function largestPairSum(numbers) {
    const max1 = Math.max(...numbers)
    numbers.splice(numbers.indexOf(max1), 1)
    const max2 = Math.max(...numbers)

    return max1 + max2
}

largestPairSum([10, 14, 2, 23, 19])