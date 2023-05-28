function stray(numbers) {
    let counts = {};
    for (let i = 0; i < numbers.length; i++) {
        counts[numbers[i]] = (counts[numbers[i]] || 0) + 1;
    }
    for (let key in counts) {
        if (counts[key] === 1) {
            return parseInt(key);
        }
    }
}

stray([1, 1, 2])
stray([17, 17, 3, 17, 17, 17, 17])