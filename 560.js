function minValue(values) {
    return +values
        .sort((a, b) => a - b)
        .filter((value, index, array) => {
            return value !== array[index + 1];
        })
        .join('');
}

minValue([4, 3, 1])