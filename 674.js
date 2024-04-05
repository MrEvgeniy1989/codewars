// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
function flickSwitch(arr) {
  let result = []
  let indicator = true

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      indicator = !indicator
    }
    if (indicator) {
      result.push(true)
    } else {
      result.push(false)
    }
  }

  return result
}

flickSwitch(["codewars", "flick", "code", "wars"])
