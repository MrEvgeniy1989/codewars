// https://www.codewars.com/kata/64127b25114de109258fb6fe/train/javascript
function reflect([x, y], [m, b]) {
    const a = 2 * (y - b - x * m) / (m * m + 1);
    return [x + m * a, y - a];
}