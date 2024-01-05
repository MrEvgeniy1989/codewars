// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
function firstNonRepeatingLetter(s) {
    let sArr = s.split('')

    if (s.length < 1) return ''
    for (let i = 0; i < sArr.length; i++) {
        let current = 0
        for (let j = 0; j < sArr.length; j++) {
            if (sArr[i].toLowerCase() === sArr[j].toLowerCase()) {
                current += 1
            }
        }
        if (i === sArr.length - 1 && current > 1) return ''
        if (current === 1) return sArr[i]
    }
}

firstNonRepeatingLetter('stress')