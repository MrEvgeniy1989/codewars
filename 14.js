function solution(str) {
    for (var i = 0, rts = ""; i < str.length; i++) {
        rts = rts + str[str.length - (i + 1)];
    }
    return rts;
}