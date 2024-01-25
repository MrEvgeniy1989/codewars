// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
function isValidIP(str) {
  const octets = str.split(".")

  if (octets.length !== 4) {
    return false
  }

  for (const octet of octets) {
    if (!/^\d+$/.test(octet)) {
      return false
    }

    const value = parseInt(octet, 10)
    if (value < 0 || value > 255) {
      return false
    }

    if (octet.length > 1 && octet[0] === "0") {
      return false
    }
  }

  return true
}
