// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
function isOpposite(s1, s2) {
    if (s1 === '' && s2 === '') return false
    if (s1.length !== s2.length) return false
    for (let i = 0; i < s1.length; i++) {
        let letter = s1[i] === s1[i].toLowerCase() ? s1[i].toUpperCase() : s1[i].toLowerCase()
        if (letter !== s2[i]) return false
    }
    return true
}

isOpposite("iIyvjqoX", "IiYVJQOxl")