// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
function toWeirdCase(string) {
    const words = string.split(' ')

    const result = words.map(word => {
        let temp = ''
        for (let i = 0; i < word.length; i++) {
            temp = temp + (i % 2 === 0 ? word[i].toUpperCase() : word[i])
        }
        return temp
    })

    return result.join(' ')
}

toWeirdCase('This is a test')