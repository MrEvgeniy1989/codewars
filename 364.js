// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
function uniTotal(string) {
    let result = 0
    if (string === '') return 0
    for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i)
    }
    return result
}

uniTotal('a')