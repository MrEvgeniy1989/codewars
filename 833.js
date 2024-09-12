// https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript
function spoonerize(words) {
  let word = words.split(" ")
  return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(" ")
}
