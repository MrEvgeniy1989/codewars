// https://www.codewars.com/kata/6446c0fe4e259c006511b75e/train/javascript
const extractBits = (field, offset, length) =>
    (field >> offset) % 2n ** (length > 64n ? 64n : length);