/*Given the string representations of two integers, return the string representation of the sum of those integers.

    For example:

    sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

    I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.*/
function sumStrings(a, b) {
    const digitsA = a.split('').map(Number).reverse();
    const digitsB = b.split('').map(Number).reverse();
    const result = [];
    let carry = 0;
    let i = 0;
    while (i < digitsA.length || i < digitsB.length || carry) {
        const sum = (digitsA[i] || 0) + (digitsB[i] || 0) + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i++;
    }
    return result.reverse().join('').replace(/^0+/, '') || '0';
}