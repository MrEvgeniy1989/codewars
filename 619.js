// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
function dataReverse(data) {
  let result = []
  for (let i = 0; i < data.length; i += 8) {
    result.push([data.slice(i, i + 8)])
  }
  result = result.reverse().reduce((a, b) => a.concat(...b), [])
  return result
}

dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0])
