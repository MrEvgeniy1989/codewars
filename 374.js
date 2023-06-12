// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj) {
    let result = [];
    for (let key in obj) {
        if (key.length === 5) {
            result.push(key);
        }
        if (obj[key].length === 5) {
            result.push(obj[key]);
        }
    }
    return result
}

giveMeFive({Our: "earth", is: "a", beautyful: "world"})
giveMeFive({Ihave: "enough", money: "to", buy: "a", car: "model"})
giveMeFive({Pears: "than", apple: "sweet"})