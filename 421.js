// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
function bigToSmall(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result = result.concat(...arr[i])
    }

    result.sort((a, b) => b - a)

    return result.join('>')
}

bigToSmall([[1, 2], [3, 4], [5, 6]])