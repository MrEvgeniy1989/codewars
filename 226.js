const arrayMadness = (a, b) => a.reduce((acc, aEl) => acc + aEl ** 2, 0) > b.reduce((acc, bEl) => acc + bEl ** 3, 0)

arrayMadness([4, 5, 6], [1, 2, 3])