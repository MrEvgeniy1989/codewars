function stairsIn20(s) {
    return s.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b) * 20;
}