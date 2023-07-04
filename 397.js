function excludingVatPrice(price) {
    if (price === null) {
        return -1;
    }
    const excludingVat = price / 1.15;
    return parseFloat(excludingVat.toFixed(2));
}

excludingVatPrice(230)
excludingVatPrice(123)