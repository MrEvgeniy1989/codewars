// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
function colorOf(r, g, b) {
    const red = r.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}


colorOf(255, 0, 0)