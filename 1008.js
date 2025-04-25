const arr2bin = (arr) => arr.every(Number.isInteger) && arr.reduce((sum, n) => sum + n, 0).toString(2)
