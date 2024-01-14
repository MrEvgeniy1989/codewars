function encrypt(text, n) {
    if (!text || n <= 0) return text;

    for (let i = 0; i < n; i++) {
        let oddChars = "";
        let evenChars = "";

        for (let j = 0; j < text.length; j++) {
            if (j % 2 === 1) {
                oddChars += text[j];
            } else {
                evenChars += text[j];
            }
        }

        text = oddChars + evenChars;
    }

    return text;
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText

    const mid = Math.floor(encryptedText.length / 2);

    for (let i = 0; i < n; i++) {
        const oddChars = encryptedText.slice(0, mid);
        const evenChars = encryptedText.slice(mid);

        let decryptedText = "";
        for (let j = 0; j < mid; j++) {
            decryptedText += evenChars[j] + oddChars[j];
        }

        if (encryptedText.length % 2 !== 0) {
            decryptedText += evenChars[mid];
        }

        encryptedText = decryptedText;
    }

    return encryptedText;
}

encrypt("This is a test!", 1)
encrypt("This is a test!", 2)
encrypt("This is a test!", 3)
encrypt("This is a test!", 4)

decrypt("hsi  etTi sats!", 1)
decrypt("s eT ashi tist!", 2)
decrypt(" Tah itse sits!", 3)