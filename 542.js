// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
function nbDig(n, d) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        let square = (i * i + "").split("");
        square.forEach((s) => s == d ? res++ : null)
    }
    return res;
}