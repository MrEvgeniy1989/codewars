const encode = (str) => {
  return str.replace(/[a-z]/gi, (l) => {
    let cc = l.charCodeAt(0)
    return cc - (cc < 97 ? 64 : 96)
  })
}
