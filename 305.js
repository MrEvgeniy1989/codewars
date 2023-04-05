/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

    Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/
function longest(s1, s2) {
    let s1Arr = s1.split('')
    let s2Arr = s2.split('')
    let result = []
    result = s1Arr.concat(s2Arr)
    result = result.reduce((acc, item) => {
        if (acc.includes(item)) {
            return acc
        }
        return [...acc, item]
    }, [])
    result = result.sort().join('')
    return result
}

longest("aretheyhere", "yestheyarehere")