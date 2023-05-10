// https://www.codewars.com/kata/5592e3bd57b64d00f3000047
function findNb(m) {
    let sum = 0;
    let n = 1;
    while (sum < m) {
        sum += Math.pow(n, 3);
        if (sum === m) {
            return n;
        }
        n++;
    }
    return -1;
}
