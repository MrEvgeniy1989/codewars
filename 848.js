// https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript
const prevMultOfThree = (n) => {
  if (n < 3) {
    return null
  }
  if (n % 3 === 0) {
    return n
  } else {
    n = Number(n.toString().slice(0, -1))
    return prevMultOfThree(n)
  }
}

prevMultOfThree(1244)
