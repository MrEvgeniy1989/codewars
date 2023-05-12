// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
function longestConsec(strarr, k) {
    if (k < 1 || k > strarr.length) return ''
    let result = ''
    for (let i = 0; i < strarr.length; i++) {
        let temp = strarr.slice(i, k + i).join('')
        if (temp.length > result.length) {
            result = temp
        }
    }
    return result
}

longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 2)