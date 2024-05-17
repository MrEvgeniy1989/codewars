// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
function arrayLeaders(numbers) {
  let leaders = []

  for (let i = 0; i < numbers.length; i++) {
    let sum = 0
    for (let j = i + 1; j < numbers.length; j++) {
      sum += numbers[j]
    }
    if (numbers[i] > sum) {
      leaders.push(numbers[i])
    }
  }

  return leaders
}

arrayLeaders([1, 2, 3, 4, 0])
