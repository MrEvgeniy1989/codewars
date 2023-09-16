// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript
function amIWilson(p) {
    p = BigInt(p);
    const fac = n => n ? n * fac(n - 1n) : 1n;
    const d = (fac(p - 1n) + 1n);
    return !(d % (p * p));
}