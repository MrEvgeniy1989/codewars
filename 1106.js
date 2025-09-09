const intDiff = (arr, n) => {
  let count = 0
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[j] - arr[i] === n || arr[i] - arr[j] === n) {
        count++
      }
    }
  }
  return count
}

intDiff([1, 1, 5, 6, 9, 16, 27], 4)
