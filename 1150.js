const add = (...args) => args.reduce((s, v, i) => s + v * (i + 1), 0)
