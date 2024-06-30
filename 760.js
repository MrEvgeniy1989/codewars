// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
function crap(x, bags, cap) {
  const yard = x.reduce((a, b) => a.concat(b))
  return yard.includes("D") ? "Dog!!" : bags * cap - yard.filter((val) => val === "@").length > 0 ? "Clean" : "Cr@p"
}
