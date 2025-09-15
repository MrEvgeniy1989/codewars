function diagonal(matrix) {
  let pd = 0,
    sd = 0
  for (let i = 0; i < matrix.length; i++) {
    pd += matrix[i][i]
    sd += matrix[i][matrix.length - i - 1]
  }
  if (pd > sd) return "Principal Diagonal win!"
  else if (sd > pd) return "Secondary Diagonal win!"
  return "Draw!"
}
