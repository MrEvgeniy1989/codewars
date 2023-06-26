// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
function aliasGen() {
    let fName = firstName[arguments[0][0].toUpperCase()]
    let sName = surname[arguments[1][0].toUpperCase()]
    return fName && sName ? `${fName} ${sName}` : `Your name must start with a letter from A - Z.`
}

aliasGen("Mike", "Millington")
aliasGen("Fahima", "Tash")