function giveChange(amount) {
  var arr = [0, 0, 0, 0, 0, 0]
  while (amount >= 100) {
    arr[5]++
    amount -= 100
  }
  while (amount >= 50) {
    arr[4]++
    amount -= 50
  }
  while (amount >= 20) {
    arr[3]++
    amount -= 20
  }
  while (amount >= 10) {
    arr[2]++
    amount -= 10
  }
  while (amount >= 5) {
    arr[1]++
    amount -= 5
  }
  while (amount >= 1) {
    arr[0]++
    amount--
  }
  return arr
}
