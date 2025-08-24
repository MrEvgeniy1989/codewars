const perfectRoots = (n) => [2, 4, 8].every((r) => Math.pow(n, 1 / r) % 1 === 0)
