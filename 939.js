function listToArray(list) {
  const temp = []
  while (list) {
    temp.push(list.value)
    list = list.next
  }
  return temp
}
