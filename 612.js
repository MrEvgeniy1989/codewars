// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
function add(a, b) {
  console.log(a, b)
  a = a.split("").reverse()
  b = b.split("").reverse()

  let sum = []
  let remainder = 0
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let x = parseInt(a[i]) ? parseInt(a[i]) : 0
    let y = parseInt(b[i]) ? parseInt(b[i]) : 0
    let digit = (x + y + remainder) % 10
    remainder = Math.floor((x + y + remainder) / 10)
    sum.unshift(digit)
  }
  if (remainder) {
    sum.unshift(remainder)
  }

  return sum.join("")
}

add("63829983432984289347293874", "90938498237058927340892374089")
add("123", "456")
add("888", "222")
