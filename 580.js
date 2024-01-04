// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
function solution(number) {
    let thousands = Math.floor(number / 1000)
    number = number - thousands * 1000
    result = 'M'.repeat(thousands)
    let hundreds = Math.floor(number / 100)
    number = number - hundreds * 100

    switch (hundreds) {
        case 9: {
            result += 'CM'
            break
        }
        case 8: {
            result += 'DCCC'
            break
        }
        case 7: {
            result += 'DCC'
            break
        }
        case 6: {
            result += 'DC'
            break
        }
        case 5: {
            result += 'D'
            break
        }
        case 4: {
            result += 'CD'
            break
        }
        case 3: {
            result += 'CCC'
            break
        }
        case 2: {
            result += 'CC'
            break
        }
        case 1: {
            result += 'C'
            break
        }
    }
    let tens = Math.floor(number / 10)
    number = number - tens * 10

    switch (tens) {
        case 9: {
            result += 'XC'
            break
        }
        case 8: {
            result += 'LXXX'
            break
        }
        case 7: {
            result += 'LXX'
            break
        }
        case 6: {
            result += 'LX'
            break
        }
        case 5: {
            result += 'L'
            break
        }
        case 4: {
            result += 'XL'
            break
        }
        case 3: {
            result += 'XXX'
            break
        }
        case 2: {
            result += 'XX'
            break
        }
        case 1: {
            result += 'X'
            break
        }
    }
    let ones = number

    switch (ones) {
        case 9: {
            result += 'IX'
            break
        }
        case 8: {
            result += 'VIII'
            break
        }
        case 7: {
            result += 'VII'
            break
        }
        case 6: {
            result += 'VI'
            break
        }
        case 5: {
            result += 'V'
            break
        }
        case 4: {
            result += 'IV'
            break
        }
        case 3: {
            result += 'III'
            break
        }
        case 2: {
            result += 'II'
            break
        }
        case 1: {
            result += 'I'
            break
        }
    }


    return result
}

solution(2908)