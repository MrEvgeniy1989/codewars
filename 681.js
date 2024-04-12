// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript
function balancedNum(number) {
  let arr = String(number).split("")

  if (arr.length <= 2) return "Balanced"

  let middleDigitIndex = Math.floor(arr.length / 2)

  const leftSide = arr.length % 2 === 0 ? arr.slice(0, middleDigitIndex - 1) : arr.slice(0, middleDigitIndex)
  const rightSide = arr.slice(middleDigitIndex + 1)

  const leftSideSum = leftSide.reduce((acc, curr) => acc + Number(curr), 0)
  const rightSideSum = rightSide.reduce((acc, curr) => acc + Number(curr), 0)

  return leftSideSum === rightSideSum ? "Balanced" : "Not Balanced"
}

balancedNum(1024)
balancedNum(959)
balancedNum(27102983)
