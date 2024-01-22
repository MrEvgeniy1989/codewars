// https://www.codewars.com/kata/55466989aeecab5aac00003e/train/javascript
function sqInRect(lng, wdth) {
    if (lng === wdth) return null
    let result = []

    let area = lng * wdth

    for (let i = Math.min(lng, wdth); i <= area;) {
        if (area - (i ** 2) >= 0) {
            result.push(i)
            if (lng > wdth) {
                lng -= wdth
            } else {
                wdth -= lng
            }
            area = lng * wdth
        } else {
            i = Math.min(lng, wdth)
        }
    }

    return result
}

sqInRect(20, 14)
sqInRect(5, 3)
sqInRect(5, 5)