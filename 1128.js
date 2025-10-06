function howManyGifts(maxBudget, gifts) {
  gifts.sort((a, b) => a - b)
  return gifts.filter((item) => (maxBudget -= item) >= 0).length
}
