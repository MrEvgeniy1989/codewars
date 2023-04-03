function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = string.toLowerCase().replace(/[^a-z]/g, '');
    for (let i = 0; i < alphabet.length; i++) {
        if (!letters.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}