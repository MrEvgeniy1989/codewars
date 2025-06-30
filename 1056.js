const solve = (n) => (n === 0 ? "0" : n === 1 ? "01" : solve(n - 1) + solve(n - 2))
