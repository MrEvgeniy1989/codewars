// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript
function solution(roman) {
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let digits = roman.split('')
    let result = 0

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 'C' && (digits[i + 1] === 'M' || digits[i + 1] === 'D')) {
            result -= 100
            continue
        }
        if (digits[i] === 'X' && (digits[i + 1] === 'C' || digits[i + 1] === 'L')) {
            result -= 10
            continue
        }
        if (digits[i] === 'I' && (digits[i + 1] === 'X' || digits[i + 1] === 'V')) {
            result -= 1
            continue
        }

        result += romanNumerals[digits[i]]
    }

    return result
}

solution('IV')
solution('MDCLXVI')
solution('MMVIII')
solution('XXI')
solution('I')
solution('IV')
