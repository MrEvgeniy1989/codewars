// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript
function twoHighest(arr) {
    if (arr.length === 0) return []
    if (arr.length === 1) return [arr[arr.length - 1]]
    let result = []
    arr.sort((a, b) => a - b)
    result.push(arr[arr.length - 1])
    let newArr = arr.filter(el => el !== arr[arr.length - 1])
    result.push(newArr[newArr.length - 1])

    return result
}

twoHighest([15, 20, 20, 17])