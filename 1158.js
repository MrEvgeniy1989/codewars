function totalBill(s) {
  return s.replace(/ /g, "").replace(/r{5}/g, "rrrr").length * 2
}
