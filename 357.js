function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!String(i).includes('5')) {
            count++;
        }
    }
    return count;
}

dontGiveMeFive(1, 25)
dontGiveMeFive(4, 17)