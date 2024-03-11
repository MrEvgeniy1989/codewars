// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript
function vertMirror(strng) {
  return strng
    .split("\n")
    .map((line) => line.split("").reverse().join("") + "\n")
    .join("")
    .substring(0, strng.length)
}

function horMirror(strng) {
  return strng.split("\n").reverse().join("\n").substring(0, strng.length)
}

function oper(fct, s) {
  return fct(s)
}
