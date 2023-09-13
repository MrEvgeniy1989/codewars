// https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed/train/javascript
function Warrior(n) {
    let name = n;

    this.name = function (newName) {
        if (newName) name = newName;
        return name;
    };
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
};