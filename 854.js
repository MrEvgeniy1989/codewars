// https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript
function searchNames(logins) {
  return logins.filter(function (login) {
    return login[0].slice(-1) === "_"
  })
}
