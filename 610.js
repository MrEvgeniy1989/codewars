// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
function partsSums(ls) {
  let result = []
  let currentArr = [...ls]
  let currentSum = currentArr.reduce((acc, el) => acc + el, 0)

  for (let i = 0; i <= ls.length; i++) {
    result.push(currentSum)
    currentSum -= ls[i]
  }

  return result
}

partsSums([0, 1, 3, 6, 10])
partsSums([1, 2, 3, 4, 5, 6])
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
