/*
Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

    For example, the score of abad is 8 (1 + 2 + 1 + 4).

    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.*/
function high(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result
    let res = 0
    const words = x.split(' ').map(el => el.split(''))
    for (let i = 0; i < words.length; i++) {
        let score = words[i].reduce((acc, el) => {
            return acc + alphabet.indexOf(el) + 1
        }, 0)
        if (res < score) {
            res = score
            result = words[i].join('')
        }
    }
    return result
}

high('man i need a taxi up to ubud')
high('what time are we climbing up the volcano')