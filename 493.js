// https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript
function solve(s) {
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}