function riders(stations) {
  let rider = 1
  let distance = 0
  for (s of stations) {
    if (distance + s > 100) {
      rider += 1
      distance = s
    } else {
      distance += s
    }
  }
  return rider
}
