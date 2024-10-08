// https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript
const whosOnline = (friends) => {
  let output = {}
  friends.forEach((e) => {
    let status = e.status
    if (status === "online" && e.lastActivity > 10) status = "away"
    let temp = output[status]
    if (output[status]) {
      output[status].push(e.username)
    } else {
      output[status] = [e.username]
    }
  })
  return output
}
