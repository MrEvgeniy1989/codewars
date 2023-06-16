const hotpo = function (n) {
    if (n === 0) return 0; //Optional Handler to n = 0
    let result = 0

    while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1
        result += 1
    }

    return result
};