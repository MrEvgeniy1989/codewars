// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7/train/javascript
Array.prototype.filter = function (callbackFn) {

    const filteredArray = [];

    for (let i = 0; i < this.length; i++) {

        const shouldKeep = callbackFn(this[i], i, this);

        if (shouldKeep) {
            filteredArray.push(this[i]);
        }
    }

    return filteredArray;

}