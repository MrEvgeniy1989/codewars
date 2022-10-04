/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.*/
function repeatStr(n, s) {
    var str = '';
    while (n > 0) {
        str = str + s;
        n--;
    }

    return str;
}