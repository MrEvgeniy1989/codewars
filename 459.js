// https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript
function bloodAlcoholContent(drinks, weight, sex, time) {

    const alcoholConsumed = drinks.ounces * drinks.abv;

    let ratio;
    if (sex === 'male') {
        ratio = 0.73;
    } else if (sex === 'female') {
        ratio = 0.66;
    }

    const bac = (alcoholConsumed * 5.14 / weight * ratio) - 0.015 * time;

    return Number(bac.toFixed(4));

}