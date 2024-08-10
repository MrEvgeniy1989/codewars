// https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript
function makeBackronym(string) {
  return string
    .toUpperCase()
    .split("")
    .map(function (s) {
      return dict[s]
    })
    .join(" ")
}
