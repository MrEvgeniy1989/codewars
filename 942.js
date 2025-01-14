function counterEffect(str) {
  const output = []
  for (let i = 0; i < str.length; i++) {
    const temp = []
    for (let j = 0; j <= Number(str[i]); j++) {
      temp.push(j)
    }
    output.push(temp)
  }
  return output
}
