//https://www.codewars.com/kata/59a9919107157a45220000e1/solutions
const findAll = (array, n) => {
    let a = [];
    array.forEach((v, i) => {
        if (v === n) {
            a.push(i)
        }
    })
    return a
}