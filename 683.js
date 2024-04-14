// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
function myLanguages(results) {
  const resultsArr = []

  for (const resultsKey in results) {
    if (results[resultsKey] >= 60) {
      resultsArr.push([resultsKey, results[resultsKey]])
    }
  }

  resultsArr.sort((a, b) => b[1] - a[1])
  return resultsArr.map((el) => el[0])
}

myLanguages({ Java: 10, Ruby: 80, Python: 65 })
