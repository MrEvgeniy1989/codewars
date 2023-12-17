// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
function capitalize(s) {
    let odd = s.split('').map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join('')
    let even = s.split('').map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter).join('')
    return [odd, even]
}