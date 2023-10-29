// https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9/train/javascript
function burner(c, h, o) {
    const water = Math.min(~~(h / 2), o)
    const carbon = Math.min(~~((o - water) / 2), c)
    const methane = Math.min(~~((h - water * 2) / 4), c - carbon)
    return [water, carbon, methane]
}