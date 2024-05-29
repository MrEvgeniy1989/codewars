// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript
function solve(s) {
	let cur = 0
	let max = 0
	for (let i = 0; i < s.length; ++i) {
		if ("aeiou".includes(s[i])) {
			cur++
			if (cur > max) {
				max = cur
			}
		} else {
			cur = 0
		}
	}
	return max
}