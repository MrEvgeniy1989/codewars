function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const positions = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();

        if (alphabet.includes(char)) {
            positions.push(alphabet.indexOf(char) + 1);
        }
    }

    return positions.join(' ');
}