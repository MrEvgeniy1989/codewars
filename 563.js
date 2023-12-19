// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
function sumOfMinimums(arr) {
    return arr.reduce((acc, curr) => acc + Math.min(...curr), 0)
}

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])