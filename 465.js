// https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript
function howMuchWater(water, load, clothes) {
    if (clothes > load * 2) {
        return 'Too much clothes';
    }

    if (clothes < load) {
        return 'Not enough clothes';
    }

    let extraLoads = Math.max(clothes - load, 0);
    let waterNeeded = water * Math.pow(1.1, extraLoads);

    return +waterNeeded.toFixed(2);
}