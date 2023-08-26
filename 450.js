// https://www.codewars.com/kata/542ebbdb494db239f8000046/train/javascript
function nextItem(xs, item) {
    let found = false;
    for (var x of xs) {
        if (found) return x;
        if (x === item) found = true;
    }
    return undefined;
}