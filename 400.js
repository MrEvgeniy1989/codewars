// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
function logicalCalc(array, op) {
    let initialValue = op === "AND";
    return array.reduce((acc, el) => {
        if (op === "AND") {
            return acc && el;
        } else if (op === "OR") {
            return acc || el;
        } else if (op === "XOR") {
            return acc !== el;
        }
    }, initialValue);
}

logicalCalc([true, true, true, false], "OR")
logicalCalc([true, true, true, false], "AND")
