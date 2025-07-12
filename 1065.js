function iTri(dist) {
  let totalDist = 2.4 + 112 + 26.2
  if (dist === 0) return "Starting Line... Good Luck!"
  if (dist <= 2.4) return { Swim: `${(totalDist - dist).toFixed(2)} to go!` }
  if (dist <= 114.4) return { Bike: `${(totalDist - dist).toFixed(2)} to go!` }
  if (dist <= 127) return { Run: `${(totalDist - dist).toFixed(2)} to go!` }
  if (dist < totalDist) return { Run: `Nearly there!` }
  return "You're done! Stop running!"
}
