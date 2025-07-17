function fix(paragraph) {
  if (paragraph === "") return ""
  return paragraph
    .split(". ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(". ")
}
