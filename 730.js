// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript
function wordValue(a) {
  return a.map(
    (s, i) =>
      s
        .replace(/\s/g, "")
        .split("")
        .map((b) => b.charCodeAt(0) - 96)
        .reduce((acc, cur) => acc + cur, 0) *
      (i + 1),
  )
}
