// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
function score(dice) {
    let copyDice = [...dice]
    let result = 0
    let temp = {}

    copyDice.forEach(el => temp[el] ? temp[el] += 1 : temp[el] = 1)

    for (const tempKey in temp) {
        if (temp[tempKey] >= 3) {
            if (tempKey === '1') {
                result += 1000
            } else {
                result += +tempKey * 100
            }
            temp[tempKey] -= 3
        }

        if (tempKey === '1' || tempKey === '5') {
            while (temp[tempKey] > 0) {
                if (tempKey === '1') {
                    result += 100
                    temp[tempKey] -= 1
                } else if (tempKey === '5') {
                    result += 50
                    temp[tempKey] -= 1
                }
            }
        }
    }

    return result
}

score([2, 4, 4, 5, 4])
score([4, 4, 4, 3, 3])
score([2, 3, 4, 6, 2])