// https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript
function neutralise(s1, s2) {
  let res = ""
  for (let i = 0; i < s1.length; i++) {
    res += s1[i] !== s2[i] ? "0" : s1[i]
  }
  return res
}
