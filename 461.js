// https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript
function cutCube(volume, n) {
    let side = Math.cbrt(volume);

    if (!Number.isInteger(side)) {
        return false;
    }

    let blockVol = volume / n;
    let blockSide = Math.cbrt(blockVol);

    return Number.isInteger(blockSide);
}