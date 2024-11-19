// https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript
function wordSearch(query, seq) {
  query = query.toLowerCase()
  const res = seq.filter((item) => item.toLowerCase().indexOf(query) !== -1)

  return res.length ? res : ["Empty"]
}
