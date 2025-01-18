function last(first, ...rest) {
  if (rest.length) return rest.pop()
  if (first.length) return [...first].pop()
  return first
}
