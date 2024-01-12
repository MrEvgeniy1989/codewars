// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
function getPINs(observed) {
    const digitVariations = {
        '1': [1, 2, 4],
        '2': [2, 1, 3, 5],
        '3': [3, 2, 6],
        '4': [4, 1, 5, 7],
        '5': [5, 2, 6, 8, 4],
        '6': [6, 3, 9, 5],
        '7': [7, 4, 8],
        '8': [8, 5, 9, 0, 7],
        '9': [9, 6, 8],
        '0': [0, 8],
    };
    const observedDigits = observed.split('');

    let pinVariations = [''];

    for (let i = 0; i < observedDigits.length; i++) {
        const currentDigit = observedDigits[i];
        const possibleDigits = digitVariations[currentDigit];
        const newPinVariations = [];

        for (let j = 0; j < pinVariations.length; j++) {
            for (let k = 0; k < possibleDigits.length; k++) {
                newPinVariations.push(pinVariations[j] + possibleDigits[k]);
            }
        }

        pinVariations = newPinVariations;
    }

    return pinVariations;
}

console.log(getPINs('369'));
console.log(getPINs('11'));
console.log(getPINs('8'));
