const GeometricSequenceSum = (a, r, n) => (r === 1 ? a * n : (a * (r ** n - 1)) / (r - 1))
