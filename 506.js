// https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript
function moveTen(s) {
    return s.split('').map(e => e.charCodeAt(0) + 10 > 122
        ? String.fromCharCode(e.charCodeAt(0) - 16)
        : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}