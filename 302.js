function order(words) {
    if (words.length === 0) return ''
    const wordsArr = words.split(' ')
    const newArr = []
    const numbersInWords = wordsArr.map(w => w.match(/[0-9]/)).map(el => newArr.push(+el[0]))
    const result = []
    let index = 1
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === index) {
            result.push(wordsArr[i])
            index += 1
            i = -1
        }
    }
    return result.join(' ')
}

order("4of Fo1r pe6ople g3ood th5e the2")