// https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
function roundIt(n) {
    // Get number of digits before and after decimal
    const left = n.toString().split('.')[0].length;
    const right = n.toString().split('.')[1].length;

    // Compare digits on left vs right
    if (left < right) {
        // More digits after decimal, use ceil
        return Math.ceil(n);
    } else if (left > right) {
        // More digits before decimal, use floor
        return Math.floor(n);
    } else {
        // Equal digits on left and right, use round
        return Math.round(n);
    }
}

roundIt(3.45); // 4
roundIt(34.5); // 34
roundIt(34.56); // 35