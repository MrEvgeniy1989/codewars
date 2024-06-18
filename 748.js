// https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript
function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0

  const count = Object.create(null)

  collection.forEach((item) => {
    count[item] = (count[item] || 0) + 1
  })

  return Math.max(...Object.values(count))
}
