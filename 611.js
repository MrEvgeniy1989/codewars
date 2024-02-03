// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
function pickPeaks(arr) {
  if (arr.length < 3) return { pos: [], peaks: [] }
  let result = { pos: [], peaks: [] }

  for (let i = 1; i < arr.length; i++) {
    if (arr.length < i + 1) return result
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      result.pos.push(i)
      result.peaks.push(arr[i])
    } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr.length < j + 1) return result
        if (arr[j] > arr[j + 1]) {
          result.pos.push(i)
          result.peaks.push(arr[i])
          i = j
          break
        } else if (arr[j] < arr[j + 1]) {
          i = j
          break
        }
      }
    }
  }

  return result
}

pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3])
pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])
pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])
pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
