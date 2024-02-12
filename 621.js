// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
function alphabetWar(fight) {
  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  }
  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  }
  let countLeftSide = 0
  let countRightSide = 0

  for (let i = 0; i < fight.length; i++) {
    leftSide[fight[i]] ? (countLeftSide += leftSide[fight[i]]) : (countLeftSide += 0)
    rightSide[fight[i]] ? (countRightSide += rightSide[fight[i]]) : (countRightSide += 0)
  }

  return countLeftSide > countRightSide
    ? "Left side wins!"
    : countLeftSide < countRightSide
      ? "Right side wins!"
      : "Let's fight again!"
}

alphabetWar("zdqmwpbs")
alphabetWar("zzzzs")
