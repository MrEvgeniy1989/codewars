// https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript
function datingRange(age) {
    let min
    let max

    if (age <= 14) {
        min = Math.floor(age - 0.10 * age)
        max = Math.floor(age + 0.10 * age)
    } else {
        min = Math.floor(age / 2 + 7)
        max = Math.floor((age - 7) * 2)
    }

    return `${min}-${max}`
}

datingRange(10)
datingRange(17)
datingRange(40)
datingRange(15)