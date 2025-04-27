function toAcronym(input) {
  return input
    .split(" ")
    .map(function (item) {
      return item[0].toUpperCase()
    })
    .join("")
}
