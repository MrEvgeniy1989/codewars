function duplicateCount(text) {
    const lowercaseText = text.toLowerCase();

    const charCount = {};

    for (let char of lowercaseText) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let count = 0;
    for (let char in charCount) {
        if (charCount[char] > 1) {
            count++;
        }
    }

    return count;
}