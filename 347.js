// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
    if (numbers === []) return [];
    let smallest = numbers[0];
    let smallestIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
            smallestIndex = i;
        }
    }
    return numbers.filter((el, index) => index !== smallestIndex)
}

removeSmallest([1, 2, 3, 4, 5])
removeSmallest([5, 3, 2, 1, 4])