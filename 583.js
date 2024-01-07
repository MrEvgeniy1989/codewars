// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
function orderWeight(string) {
    let objString = string.split(' ').map(el => ({key: el, value: el.split('').reduce((acc, el) => acc + +el, 0)}))
    objString.sort((a, b) => {
        if (a.value !== b.value) {
            return a.value - b.value
        } else {
            return a.key.localeCompare(b.key)
        }
    })
    let result = objString.map(el => el.key)
    return result.join(' ')
}

orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
orderWeight("103 123 4444 99 2000")
