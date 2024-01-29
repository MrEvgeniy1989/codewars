// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return ""
  let result = ""

  for (let i = 0; i < listOfCat.length; i++) {
    let count = 0
    for (let j = 0; j < listOfArt.length; j++) {
      if (listOfArt[j][0] === listOfCat[i]) {
        count += parseInt(listOfArt[j].match(/\d+/))
      }
    }
    result += `(${listOfCat[i]} : ${count}) - `
  }

  return result.slice(0, -3)
}

stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"])
stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"])
stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"])
