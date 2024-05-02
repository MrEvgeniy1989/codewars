// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript
function explode(s) {
  let result = ""
  s.split("").forEach((item) => (result += item.repeat(+item)))
  return result
}

explode("312")
