// https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript
function maxRot(n) {
  let nStr = n.toString()
  let temp = nStr.slice(1) + nStr[0]
  let res = [nStr, temp]

  for (let i = 1; i < nStr.length - 1; i++) {
    temp = temp.slice(0, i) + temp.slice(i + 1) + temp[i]
    res.push(temp)
  }

  return Math.max(...res.map((el) => +el))
}

maxRot(56789)
maxRot(38458215)
