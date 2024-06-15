// https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript
function discoverOriginalPrice(discountedPrice, salePercentage) {
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2)
}
