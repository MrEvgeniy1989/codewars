// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
function solution(list) {
    let result = ''
    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 === list[i + 1] && list[i] + 2 === list[i + 2]) {
            result += `${list[i]}-`
            for (let j = i + 1; j < list.length; j++) {
                if (list[j] + 1 !== list[j + 1]) {
                    result += `${list[j]},`
                    i = j
                    break
                }
            }
        } else {
            result += `${list[i]},`
        }
    }
    return result.slice(0, -1)
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])