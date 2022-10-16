/* Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence! */
function smash(words) {
    let str = words[0];
    if (words == [] || words == 0 || words == null || words == undefined)
        return "";
    for (let i = 1; i < words.length; i++) {
        str = str + " " + words[i];
    }
    return str;
};