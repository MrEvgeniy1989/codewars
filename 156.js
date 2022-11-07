/*
Numbers ending with zeros are boring.

    They might be fun in your world, but not here.

    Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/
function noBoringZeros(n) {
    let str = "" + n;
    let arr = str.split("");
    for (let i = arr.length - 1; arr[i] === "0"; i--) {
        arr.pop();
    }
    return +arr.join('');
}