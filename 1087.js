function bald(x) {
  const count = x.split("/").length - 1
  let look
  switch (count) {
    case 0:
      look = "Clean"
      break
    case 1:
      look = "Unicorn"
      break
    case 2:
      look = "Homer"
      break
    case 3:
    case 4:
    case 5:
      look = "Careless"
      break
    default:
      look = "Hobo"
  }
  return [x.replace(/\//g, "-"), look + "!"]
}
