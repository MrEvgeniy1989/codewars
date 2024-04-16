function averages(numbers) {
  if (numbers === null || numbers.length < 1) return []

  const result = numbers.map((number, index, numbers) => {
    let averages
    if (index + 1) {
      averages = (number + numbers[index + 1]) / 2
    }
    return averages
  })
  result.pop()
  return result
}

averages([1, 3, 5, 1, -10])
