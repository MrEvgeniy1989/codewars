// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
function automorphic(n) {
  const str = Math.pow(n, 2).toString()
  let result = str.substring(str.length - n.toString().length)
  return Number(result) === n ? "Automorphic" : "Not!!"
}

// function automorphic(n) {
//   return String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!"
// }

automorphic(6)
