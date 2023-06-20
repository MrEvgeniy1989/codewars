// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript
function evil(n) {
    const result = n.toString(2).split('').reduce((acc, el) => el === "1" ? acc + 1 : acc, 0)
    return result % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

// evil(1)
// evil(2)
evil(3)