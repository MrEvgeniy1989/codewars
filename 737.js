// https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript
function lastSurvivor(letters, coords) {
  let result = letters

  for (let i = 0; i < coords.length; i++) {
    result = result.slice(0, coords[i]) + result.slice(coords[i] + 1)
  }

  return result
}

lastSurvivor("kbc", [0, 1])
lastSurvivor("abc", [1, 1])
