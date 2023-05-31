// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
function uefaEuro2016(teams, scores) {
    const result = scores[0] > scores[1] ? `${teams[0]} won!` : scores[0] < scores[1] ? `${teams[1]} won!` : `teams played draw.`
    return `At match ${teams[0]} - ${teams[1]}, ${result}`
}

uefaEuro2016(['Belgium', 'Italy'], [0, 2])
uefaEuro2016(['Portugal', 'Iceland'], [1, 1])