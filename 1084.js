function onesComplement(n) {
  return [...n].map((e) => (e === "1" ? "0" : "1")).join("")
}
