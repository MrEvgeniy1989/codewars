// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
function orderWeight(inputString) {
    let weightObjects = inputString.split(' ').map(weightString => ({
        original: weightString,
        sum: weightString.split('').reduce((accumulator, digit) => accumulator + +digit, 0)
    }));

    weightObjects.sort((a, b) => {
        if (a.sum !== b.sum) {
            return a.sum - b.sum;
        } else {
            return a.original.localeCompare(b.original);
        }
    });

    let resultArray = weightObjects.map(weightObj => weightObj.original);
    return resultArray.join(' ');
}


orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
orderWeight("103 123 4444 99 2000")
