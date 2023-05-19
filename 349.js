// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
function comp(array1, array2) {
    if (!array1 || !array2) return false;
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] ** 2 !== array2[i]) return false;
    }
    return true;
}

comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19])