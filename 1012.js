const firstNonRepeated = (s) => [...s].find((i) => s.indexOf(i) === s.lastIndexOf(i)) || null
