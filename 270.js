function isDigit(s) {
    //your code
    return !!s.trim() && !isNaN(s)
}

isDigit('-234.4')