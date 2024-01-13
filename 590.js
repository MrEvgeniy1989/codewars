// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
String.prototype.camelCase = function () {
    return this.split(' ').map(el => el ? el.split('')[0].toUpperCase() + el.substring(1) : '').join('')
}

"test case".camelCase()
"camel Case method".camelCase()