// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
const capitals = function (word) {
    const result = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            result.push(i)
        }
    }
    return result
};