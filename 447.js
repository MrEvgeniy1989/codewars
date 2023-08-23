// https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript
function circleCircumference(circle) {
    const radius = circle.radius;
    const circumference = 2 * Math.PI * radius;
    return Math.round(circumference * 1e6) / 1e6; // Round to 6 decimal places
}
