// https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (desiredHeight < upSpeed) return 1
  let meters = 0
  let days = 0
  do {
    meters += upSpeed
    days += 1
    if (meters >= desiredHeight) {
      return days
    } else meters -= downSpeed
  } while (meters < desiredHeight)
  return days
}
