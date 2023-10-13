// https://www.codewars.com/kata/55a8a36703fe4c45ed00005b/train/javascript
function multiple(x) {
    return x % 15 == 0 ? "BangBoom" : x % 3 == 0 ? "Bang" : x % 5 == 0 ? "Boom" : "Miss"
}