// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript
function hydrate(s) {
  let newS = s.match(/[0-9]/g)
  let result = newS.reduce((acc, el) => Number.parseInt(el) + acc, 0)
  return `${result} ${result > 1 ? "glasses" : "glass"} of water`
}

hydrate("2 glasses of wine and 1 shot")
