function remove(s) {
  const arrEM = s.split("").filter((el) => el === "!")
  const arrStr = s.split("").filter((el) => el !== "!")
  return arrStr.join("") + arrEM.join("")
}
