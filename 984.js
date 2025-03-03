const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter((n) => n > a[i])))
