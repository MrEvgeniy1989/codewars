// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0
    let result = 0
    for (let i = begin; i <= end; i = i + step) {
        result += i
    }
    return result
};

sequenceSum(2, 6, 2)