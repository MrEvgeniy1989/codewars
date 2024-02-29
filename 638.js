// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript
function evaporator(content, evap_per_day, threshold) {
  let result = 0

  for (let i = content; i >= (content / 100) * threshold; i -= (i / 100) * evap_per_day) {
    result += 1
  }

  return result
}

evaporator(10, 10, 5)
evaporator(10, 10, 10)
