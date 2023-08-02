// https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript
function sc(floor) {
    if (floor < 2) return ''
    const scream = "Aa~ ".repeat(floor - 1)
    return floor > 6 ? `${scream}Pa!` : `${scream}Pa! Aa!`
}