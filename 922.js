const ownedCatAndDog = (...pets) =>
  pets.map((petYears, i) => {
    if (petYears < 15) return 0
    if (petYears < 24) return 1

    return 2 + Math.floor((petYears - 24) / (4 + i))
  })
