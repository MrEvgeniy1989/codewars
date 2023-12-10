// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
function declareWinner(fighter1, fighter2, firstAttacker) {
    let winner = ''
    if (firstAttacker === fighter1.name) {
        do {
            fighter2.health -= fighter1.damagePerAttack
            if (fighter2.health <= 0) {
                return fighter1.name
            } else {
                fighter1.health -= fighter2.damagePerAttack
                if (fighter1.health <= 0) {
                    return fighter2.name
                }
            }
        } while (fighter1.health > 0 || fighter2.health > 0)

    } else {
        do {
            fighter1.health -= fighter2.damagePerAttack
            if (fighter1.health <= 0) {
                return fighter2.name
            } else {
                fighter2.health -= fighter1.damagePerAttack
                if (fighter2.health <= 0) {
                    return fighter1.name
                }
            }
        } while (fighter2.health > 0 || fighter1.health > 0)
    }
}