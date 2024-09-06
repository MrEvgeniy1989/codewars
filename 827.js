// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/train/javascript
function countWins(winnerList, country) {
  return winnerList.reduce((acc, winner) => (winner.country === country ? acc + 1 : acc), 0)
}
