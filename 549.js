// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
const isAnagram = function (test, original) {
    if (test.length !== original.length) return false
    test = test.toLowerCase().split('')
    original = original.toLowerCase().split('')
    for (let i = 0; i < test.length; i++) {
        if (!original.includes(test[i])) {
            return false
        } else {
            original
                .splice(original.indexOf(test[i]), 1)
        }
    }
    return true
};

isAnagram("foefet", "toffee")