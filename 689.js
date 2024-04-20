// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript
function removeRotten(bagOfFruits) {
  console.log(bagOfFruits)
  if (bagOfFruits === null || bagOfFruits === undefined || bagOfFruits.length < 1) return []
  return bagOfFruits.map((fruit) => {
    return fruit.startsWith("rotten") ? fruit.substring(6).toLowerCase() : fruit
  })
}

removeRotten(["apple", "banana", "kiwi", "melone", "orange"])
