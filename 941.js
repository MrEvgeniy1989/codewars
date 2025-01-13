function sabb(x, val, happ) {
  let count = val + happ
  let goal = "sabbatical"

  for (let i = 0; i < x.length; i++) {
    let letter = x[i]
    if (goal.includes(letter.toLowerCase())) {
      count += 1
    }
  }

  if (count > 22) {
    return "Sabbatical! Boom!"
  } else {
    return "Back to your desk, boy."
  }
}
