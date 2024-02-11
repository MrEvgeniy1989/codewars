// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
function meeting(s) {
  let friends = s.toUpperCase().split(";")
  let result
  friends = friends.map((friend) => {
    let [firstName, lastName] = [...friend.split(":")]
    return [lastName, firstName]
  })
  friends.sort((a, b) => (a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0])))
  result = friends.map((fiend) => fiend.join(", ")).join(")(")
  return `(${result})`
}

meeting(
  "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn",
)
meeting(
  "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell",
)
