function capMe(names) {
  return names.map(function (n) {
    return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()
  })
}
