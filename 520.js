// https://www.codewars.com/kata/652d5d55da13f3001fc1c37a/train/javascript
function wasCalledWithNew() {
    return new Boolean(new.target);
}