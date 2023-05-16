// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char.match(/[A-Za-z]/)) { // Check if the character is a letter
            let code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + 13) % 26) + 65);
            }

            // Lowercase letters
            if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + 13) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}