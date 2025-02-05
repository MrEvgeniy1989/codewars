function ghostBusters(building) {
  return /\s/.test(building) ? building.replace(/\s+/g, "") : "You just wanted my autograph didn't you?"
}
