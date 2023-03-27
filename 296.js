// return masked string
function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    } else {
        const masked = cc.slice(-4);
        return '#'.repeat(cc.length - 4) + masked;
    }
}

maskify('4556364607935616')