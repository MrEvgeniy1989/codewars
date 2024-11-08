// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d/train/javascript
function isFlush(cards) {
  return cards.every((a) => cards[0].slice(-1) === a.slice(-1))
}
