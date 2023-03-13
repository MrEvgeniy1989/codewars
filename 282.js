/*Digital root is the recursive sum of all the digits in a number.

    Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/
function digitalRoot(n) {
    let sum = n.toString().split('').reduce((acc, el) => acc + Number(el), 0)
    if (sum < 0 || sum >= 10) {
        return digitalRoot(sum)
    }
    return sum
}

digitalRoot(548264)