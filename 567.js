// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
function rowWeights(array) {
    let totalWeightOfTeam1 = 0
    let totalWeightOfTeam2 = 0

    for (let i = 0; i < array.length; i++) {
        i % 2 === 0 ? totalWeightOfTeam1 += array[i] : totalWeightOfTeam2 += array[i]
    }

    return [totalWeightOfTeam1, totalWeightOfTeam2]
}