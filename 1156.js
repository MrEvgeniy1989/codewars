function ballCollector(detritus) {
  return { weight: detritus.filter((x) => x === 58).length * 58 }
}
