const splitInParts = function (s, partLength) {
  const parts = []
  const array = s.split("")
  while (array.length) {
    parts.push(array.splice(0, partLength).join(""))
  }
  return parts.join(" ")
}
