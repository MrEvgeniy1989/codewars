// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
const maxSequence = function (arr) {
    let max_so_far = 0;
    let max_ending_here = 0;

    for (let i = 0; i < arr.length; i++) {
        max_ending_here += arr[i];

        if (max_ending_here < 0) {
            max_ending_here = 0;
        }

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }
    }

    return max_so_far;
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //6