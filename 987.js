const findChildren = (santasList, children) => {
  const arr = []
  for (const item of santasList) {
    for (const child of children) {
      if (item === child && !arr.includes(item)) {
        arr.push(item)
      }
    }
  }
  return arr.sort()
}
