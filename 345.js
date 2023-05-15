// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
function expandedForm(num) {
    const numArr = String(num).split('')
    let result = ''
    let multiplikator = 1
    for (let i = numArr.length - 1; i >= 0; i--) {

        if (numArr[i] !== '0') {
            result === ''
                ? result = String(Number(numArr[i]) * multiplikator)
                : result = String(Number(numArr[i]) * multiplikator) + ' + ' + result
        }

        multiplikator *= 10
    }
    return result
}

expandedForm(42)