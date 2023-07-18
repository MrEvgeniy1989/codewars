// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
    let minLength = arr[0].length
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < minLength) minLength = arr[i].length
    }


    return arr.map(el => el.slice(0, minLength))
}

cutIt(["ab", "cde", "fgh"])
cutIt(["abc", "defgh", "ijklmn"])
cutIt(["codewars", "javascript", "java"])