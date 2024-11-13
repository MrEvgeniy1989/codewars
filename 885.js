// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript
function well(x) {
  let match = ("" + x).match(/good/gi) || []
  if (match.length === 0) return "Fail!"
  if (match.length <= 2) return "Publish!"
  return "I smell a series!"
}
