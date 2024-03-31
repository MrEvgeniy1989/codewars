// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
function encode(string) {
  const vowel = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5",
  }

  for (let i = 0; i < string.length; i++) {
    if (vowel.hasOwnProperty(string[i])) {
      string = string.replace(string[i], vowel[string[i]])
    }
  }

  return string
}

function decode(string) {
  const vowel = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  }

  for (let i = 0; i < string.length; i++) {
    if (vowel.hasOwnProperty(string[i])) {
      string = string.replace(string[i], vowel[string[i]])
    }
  }

  return string
}

encode("hello")
decode("h2ll4")
