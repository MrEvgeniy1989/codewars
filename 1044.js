function doubles(s) {
  const cs = []
  for (const c of s) {
    if (cs.length !== 0 && cs[cs.length - 1] === c) cs.pop()
    else cs.push(c)
  }
  return cs.join("")
}
