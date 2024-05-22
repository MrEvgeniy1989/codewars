// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
function countLanguages(list) {
  const count = {}
  list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1))
  return count
}
