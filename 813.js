// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript
function findAdmin(list, lang) {
  return list.filter(function (dev) {
    return dev.language === lang && dev.githubAdmin === "yes"
  })
}
