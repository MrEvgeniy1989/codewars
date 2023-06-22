// https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
function toFreud(string) {
    return string.length ? string.split(' ').map(() => 'sex').join(' ') : ''
}

toFreud("You're becoming a true freudian expert")