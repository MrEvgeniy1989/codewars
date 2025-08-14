const diff = (a, b) => [...new Set([...a, ...b].filter((val) => a.includes(val) ^ b.includes(val)))].sort()
