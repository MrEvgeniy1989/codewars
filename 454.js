// https://www.codewars.com/kata/596e4ef7b61e25981200009f/train/javascript
function aspectRatio(x, y) {
    const targetAspectRatio = 16 / 9;
    const newWidth = Math.ceil(y * targetAspectRatio);
    return [newWidth, y];
}