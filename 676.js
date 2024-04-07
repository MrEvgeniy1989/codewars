// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript
function getFirstPython(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].language === "Python") {
      return `${list[i].firstName}, ${list[i].country}`
    }
  }
  return "There will be no Python developers"
}

getFirstPython([
  { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript" },
  { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Python" },
  { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure" },
])
