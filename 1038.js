const scoreboard = (string) => {
  const dictionary = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  const scoreOne = string.split(" ").reverse()[1]
  const scoreTwo = string.split(" ").reverse()[0]
  return [dictionary[scoreOne], dictionary[scoreTwo]]
}
