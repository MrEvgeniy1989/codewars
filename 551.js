// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
function smallEnough(a, limit) {
    for (const item of a) {
        if (item > limit) return false
    }
    return true
}