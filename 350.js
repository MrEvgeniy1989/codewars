// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
function inArray(array1, array2) {
    const result = [];
    array1.forEach(el => {
        for (let i = 0; i < array2.length; i++) {
            if (array2[i].includes(el)) {
                result.push(el);
                break;
            }
        }
    })
    return result.sort()
}

inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])