// https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript
function fuelPrice(litres, pricePerLitre) {
    if (litres >= 10) {
        pricePerLitre = pricePerLitre - 0.25
    } else if (litres >= 8) {
        pricePerLitre = pricePerLitre - 0.20
    } else if (litres >= 6) {
        pricePerLitre = pricePerLitre - 0.15
    } else if (litres >= 4) {
        pricePerLitre = pricePerLitre - 0.10
    } else if (litres >= 2) {
        pricePerLitre = pricePerLitre - 0.05
    }

    return Number((litres * pricePerLitre).toFixed(2))
}

fuelPrice(5, 1.23)