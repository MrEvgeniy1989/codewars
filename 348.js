// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        string[i] === string[i].toUpperCase() ? result += ' ' + string[i] : result += string[i]
    }
    return result
}

solution('camelCasing')
solution('camelCasingTest')