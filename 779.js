const bingo = (ar) => ([2, 7, 9, 14, 15].every((e) => ar.includes(e)) ? "WIN" : "LOSE")
