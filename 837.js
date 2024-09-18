// https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript
function findScreenHeight(width, ratio) {
  const [widthRatio, heightRatio] = ratio.split(":")
  const height = (width / widthRatio) * heightRatio
  return width + "x" + height
}
