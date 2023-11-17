// https://www.codewars.com/kata/649c4012aaad69003f1299c1/train/javascript
const getY = (R, G, B) => Math.round(0.299 * R + 0.587 * G + 0.114 * B);

function rgbToGrayscale(color) {
    const r = color.substring(1, 3);
    const g = color.substring(3, 5);
    const b = color.substring(5, 7);

    const r_dec = parseInt(r, 16);
    const g_dec = parseInt(g, 16);
    const b_dec = parseInt(b, 16);

    const y = getY(r_dec, g_dec, b_dec);

    const y_hex = y.toString(16).padStart(2, "0");

    const result = `#${y_hex}${y_hex}${y_hex}`;

    return result
}