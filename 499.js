// https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript
function infected(s) {

    if (!(s.includes('0') && s.includes('1'))) return 0;

    let str = s.split('X').map(el => el.includes('1') ? el.replace(/0/g, '1') : el).join('');

    let total = str.length;
    let infect = str.match(/1/g).length;

    return 100 * infect / total;
}