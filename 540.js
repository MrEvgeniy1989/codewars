// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
}

sortByLength(["Beg", "Life", "I", "To"])