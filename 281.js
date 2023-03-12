/*Given an array of integers, find the one that appears an odd number of times.

    There will always be only one integer that appears an odd number of times.

    Examples
    [7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/
function findOdd(A) {
    //happy coding!
    let count = 0
    let current = 0
    for (let i = 0; i < A.length; i++) {
        current = A[i]
        count = 1
        for (let j = i + 1; j < A.length; j++) {
            if (Math.abs(current) === Math.abs(A[j])) {
                count += 1
                current = A[j]
                A.splice(j, 1)
                j -= 1
            }
        }
        if (count % 2 === 1) {
            return current
        }
    }
}

findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])