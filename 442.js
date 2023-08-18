// https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0/train/javascript
function circleArea(circle) {
    const radius = circle.radius;
    const area = Math.PI * radius * radius;
    return Math.round(area * 1e6) / 1e6;
}