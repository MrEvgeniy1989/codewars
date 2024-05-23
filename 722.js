//www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript
function movie(card, ticket, perc) {
  let costA = (n = 0),
    costB = card
  while (Math.ceil(costB) >= costA) {
    costA += ticket
    costB += ticket * Math.pow(perc, ++n)
  }
  return n
}
