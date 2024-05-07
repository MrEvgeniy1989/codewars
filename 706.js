// https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript
function foldTo(distance) {
  if (distance <= 0) return null
  let result = 0
  let currentDistance = 0.0001

  while (currentDistance < distance) {
    currentDistance *= 2
    result += 1
  }

  return result
}

foldTo(384000000)
