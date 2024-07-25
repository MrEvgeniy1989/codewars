// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript
function arithmeticSequenceElements(a, r, n) {
  const ret = [a]
  while (--n) ret.push((a += r))
  return ret.join(", ")
}
