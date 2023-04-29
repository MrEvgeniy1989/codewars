/*Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'*/
function findMissingLetter(array) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const index = alphabet.indexOf(array[0].toLowerCase())
    if (array[0] !== alphabet[index]) alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    for (let i = 0; i < array.length; i++) {
        if (alphabet[index + i] !== array[i]) {
            return alphabet[index + i]
        }
    }
}

findMissingLetter(['O', 'Q', 'R', 'S'])