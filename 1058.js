function reverseAndMirror(s1, s2) {
  s1 = [...s1].map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())).join("")
  s2 = [...s2]
    .map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .reverse()
    .join("")
  return `${s2}@@@${[...s1].reverse().join("")}${s1}`
}
