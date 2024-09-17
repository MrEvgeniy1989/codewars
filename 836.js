// https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript
function orderFood(list) {
  const orders = {}
  list.forEach((d) => {
    if (orders[d.meal]) orders[d.meal]++
    else orders[d.meal] = 1
  })
  return orders
}
