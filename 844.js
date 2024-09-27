// https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript
function tailSwap(arr) {
  const words1 = arr[0].split(":")
  const words2 = arr[1].split(":")
  return [`${words1[0]}:${words2[1]}`, `${words2[0]}:${words1[1]}`]
}
