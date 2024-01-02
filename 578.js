// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
}

twoSum([1, 2, 3], 4);
twoSum([1234, 5678, 9012], 14690);
twoSum([2, 2, 3], 4);
twoSum([2, 3, 1], 3);