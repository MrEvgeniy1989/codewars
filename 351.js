// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1
    }

    let result = 0
    for (; h > window;) {
        if (h > window) {
            result += 1
        }
        h *= bounce
        if (h > window) {
            result += 1
        }
    }
    return result
}

bouncingBall(3, 0.66, 1.5)