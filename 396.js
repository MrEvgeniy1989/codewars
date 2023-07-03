const periodIsLate = (last, today, cycleLength) => {
    const diffDays = (today - last) / (24 * 60 * 60 * 1000);
    return diffDays > cycleLength;
}