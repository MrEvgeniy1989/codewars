// https://www.codewars.com/kata/583989556754d6f4c700018e/train/javascript
function multiples(s1, s2, s3) {
  let result = []

  for (let i = 1; i < s3; i++) {
    if (i % s1 === 0 && i % s2 === 0) {
      result.push(i)
    }
  }

  return result
}
