function createArrayOfTiers(num) {
  let prev = ""
  return [...(num + "")].map((value) => {
    return (prev += value)
  })
}
