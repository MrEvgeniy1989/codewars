// https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript
function inviteMoreWomen(L) {
  let result = L.reduce((a, b) => a + b, 0)
  return result > 0
}

inviteMoreWomen([1, -1, 1])
