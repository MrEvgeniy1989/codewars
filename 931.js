function snail(column, day, night) {
  const days = (column - night) / (day - night)
  return days < 1 ? 1 : Math.ceil(days)
}
