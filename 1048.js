function timeConvert(num) {
  return num > 0 ? `${(Math.floor(num / 60) + "").padStart(2, "0")}:${((num % 60) + "").padStart(2, "0")}` : "00:00"
}
