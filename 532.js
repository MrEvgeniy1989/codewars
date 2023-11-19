// https://www.codewars.com/kata/645fb55ecf8c290031b779ef/train/javascript
const makeLatinSquare = (n) => {
    let square = new Array(n).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            square[i][j] = ((i + j) % n) + 1
        }
    }

    return square
}