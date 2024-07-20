// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
const smaller = (nums) => nums.map((x, i) => nums.slice(i).filter((y) => x > y).length)
