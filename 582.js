function nextBigger(n) {
    let numberArray = n.toString().split('');

    if (numberArray.length <= 1) {
        return -1;
    }

    let i, j;

    for (i = numberArray.length - 2; i >= 0; i--) {
        if (numberArray[i] < numberArray[i + 1]) {
            break;
        }
    }

    if (i === -1) {
        return -1;
    }

    for (j = numberArray.length - 1; j > i; j--) {
        if (numberArray[j] > numberArray[i]) {
            break;
        }
    }

    [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];

    const remaining = numberArray.splice(i + 1).sort((a, b) => a - b);

    return +numberArray.concat(remaining).join('');
}

nextBigger(144)
nextBigger(12)
