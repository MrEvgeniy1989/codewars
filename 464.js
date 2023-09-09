// https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript
function arr2bin(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        typeof arr[i] === 'number' ? result += arr[i] : result += 0
    }
    return result.toString(2)
}

arr2bin([1, 2])