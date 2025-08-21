function toWord(n) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ]
  return words[n]
}

function wallpaper(l, w, h) {
  if ([l, w, h].indexOf(0) >= 0) {
    return "zero"
  } else {
    const roll = 5.2
    const buffer = 1.15

    const need = l * h * 2 + w * h * 2
    return toWord(Math.ceil((need / roll) * buffer))
  }
}
