// https://codewars.com/kata/6409aa6df4a0b773ce29cc3d/train/javascript
const {floor} = Math;

function realNumbers(n) {
    return n
        - floor(n / 2)
        - floor(n / 3)
        + floor(n / 6)
        - floor(n / 5)
        + floor(n / 10)
        + floor(n / 15)
        - floor(n / 30);
}