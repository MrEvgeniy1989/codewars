const solve = (string, a, b) =>
  string.slice(0, a) +
  string
    .slice(a, b + 1)
    .split("")
    .reverse()
    .join("") +
  string.slice(b + 1)
