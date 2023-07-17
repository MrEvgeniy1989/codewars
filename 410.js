// https://www.codewars.com/kata/574c5075d27783851800169e/javascript
function animals(heads, legs) {
    const chickens = (4 * heads - legs) / 2;
    const cows = (legs - 2 * heads) / 2;

    if (chickens < 0 || cows < 0 || !Number.isInteger(chickens) || !Number.isInteger(cows)) {
        return "No solutions";
    }

    return [chickens, cows];
}