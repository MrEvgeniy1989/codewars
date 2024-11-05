// https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript
function circleArea(radius) {
  if (radius <= 0) {
    throw new Error("Radius must be positive")
  }

  const area = Math.PI * radius * radius

  return Math.round(area * 100) / 100
}
