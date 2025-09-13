const compose = (s1, s2) => {
  s1 = s1.split("\n")
  s2 = s2.split("\n")

  const s = s1.map((s1, i) => s1.substr(0, i + 1) + s2[s2.length - i - 1].substr(0, s2.length - i))

  return s.join("\n")
}
