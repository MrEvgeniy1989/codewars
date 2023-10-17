// https://www.codewars.com/kata/5834315e06f227a6ac000099/train/javascript
const elimination = ar => ar.filter((e, i) => i !== ar.lastIndexOf(e))[0] || null;