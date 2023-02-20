/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

    Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/
function pigIt(str) {
    //Code here
    let arrayStr = str.split(' ')
    return arrayStr.map(word => {
        return word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word
    }).join(' ')
}

pigIt('Pig latin is cool !')