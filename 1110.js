const sumNested = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce(function (accumulator, currentValue) {
      return accumulator + sumNested(currentValue)
    }, 0)
  } else {
    return arr
  }
}
