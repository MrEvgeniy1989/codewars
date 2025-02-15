const howManyYears = function (date1, date2) {
  const year = (s) => +s.split("/")[0]
  return Math.abs(year(date1) - year(date2))
}
