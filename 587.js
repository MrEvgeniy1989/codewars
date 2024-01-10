// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
function incrementString(strng) {
    const endsWithNumber = /\d$/.test(strng);
    const match = strng.match(/\d+$/);
    const numberAtEnd = endsWithNumber && match ? parseInt(match[0], 10) : 0;
    const incrementedNumber = numberAtEnd + 1;

    if (endsWithNumber && match) {
        const zeros = match[0].length - incrementedNumber.toString().length;
        const paddedNumber = "0".repeat(Math.max(0, zeros)) + incrementedNumber;
        return strng.replace(/\d+$/, paddedNumber);
    } else {
        return strng + "1";
    }
}

incrementString("foobar000")