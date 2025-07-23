function reject(array, iterator) {
  return array.filter(function (x) {
    return !iterator(x)
  })
}
