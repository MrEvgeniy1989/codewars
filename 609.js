function loop_size(node) {
  let start = node
  let len = 2
  while (true) {
    for (let count = 1; count <= len; count++) {
      node = node.getNext()
      if (node === start) {
        return count
      }
    }
    start = node
    len *= 2
  }
}
