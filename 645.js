// https://www.codewars.com/kata/56f3a1e899b386da78000732/solutions/javascript
function partlist(arr) {
  let newArray
  let returnArray = []
  for (let i = 1; i < arr.length; i++) {
    newArray = []
    newArray.push(arr.slice(0, i).join(" "))
    newArray.push(arr.slice(i).join(" "))
    returnArray.push(newArray)
  }

  return returnArray
}

partlist(["az", "toto", "picaro", "zone", "kiwi"])
