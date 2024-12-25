function pendulum(values) {
  const result = []
  const sorted = values.sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
    if (i % 2) result.push(sorted[i])
    else result.unshift(sorted[i])
  }

  return result
}
