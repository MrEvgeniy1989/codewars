const findMissing = (arr1, arr2) => {
  arr1 = arr1.sort()
  arr2 = arr2.sort()
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return arr1[i]
  }
}
