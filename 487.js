// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript
const solution = (start, finish, difference = finish - start) =>
    Math.floor(difference / 3) + difference % 3