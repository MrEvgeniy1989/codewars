// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1

    const minLengthA1 = a1.reduce((acc, el) => acc < el.length ? acc : el.length, a1[0].length)
    const maxLengthA1 = a1.reduce((acc, el) => acc > el.length ? acc : el.length, a1[0].length)
    const minLengthA2 = a2.reduce((acc, el) => acc < el.length ? acc : el.length, a2[0].length)
    const maxLengthA2 = a2.reduce((acc, el) => acc > el.length ? acc : el.length, a2[0].length)

    const result1 = Math.abs(minLengthA1 - maxLengthA2);
    const result2 = Math.abs(minLengthA2 - maxLengthA1);

    return result1 > result2 ? result1 : result2
}

mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])