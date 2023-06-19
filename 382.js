// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
function drawStairs(n) {
    if (n === 1) return 'I'
    let result = ''
    let space = ''
    for (let i = 1; i <= n; i++) {
        i === n
            ? result = result + space + 'I'
            : result = result + space + 'I\n'
        space += ' '
    }
    return result
}

// drawStairs(1)
drawStairs(3)