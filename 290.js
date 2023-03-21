function sumTwoSmallestNumbers(numbers) {
    const firstMin = Math.min(...numbers)
    numbers.splice(numbers.indexOf(firstMin), 1)
    const secondMin = Math.min(...numbers)
    return firstMin + secondMin
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])