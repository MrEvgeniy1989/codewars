// https://www.codewars.com/kata/65013fc50038a68939098dcf/train/javascript
function partyPeople(party) {
    let arr = party.slice().sort((a, b) => a - b)
    while (arr.length && arr[arr.length - 1] > arr.length) arr.pop()
    return arr.length
}