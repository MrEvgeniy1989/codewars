const wordToBin = (x) => [...x].map((el) => el.codePointAt().toString(2).padStart(8, "0"))
