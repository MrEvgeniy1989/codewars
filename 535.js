// https://www.codewars.com/kata/643a47fadad36407bf3e97ea/train/javascript
const chars = 'PL';

function encodeCD(n) {
    let index = 0, sdata = chars[index];

    while (n > 0) {
        index = index ^ n & 1;
        sdata += chars[index];
        n >>= 1;
    }

    return sdata.padEnd(9, chars[index]);
}