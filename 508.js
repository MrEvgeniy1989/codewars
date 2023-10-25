// https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef/train/javascript
function getSectionIdFromScroll(y, s) {
    var t = 0;
    return s.findIndex(e => (t += e) > y);
}