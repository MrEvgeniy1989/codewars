function missingWord(nums, str) {
  let result = ""
  const string = str.split(" ").join("")
  nums.sort((a, b) => a - b)
  nums.forEach(function (x) {
    if (string[x]) {
      result += string[x].toLowerCase()
    } else {
      result = "No mission today"
    }
  })
  return result
}
