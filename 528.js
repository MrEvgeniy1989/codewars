// https://www.codewars.com/kata/64cac86333ab6a14f70c6fb6/train/javascript
function checkLogs(log) {
    let prev = "99:99:99";
    let days = 0;
    log.forEach(t => {
        if (t <= prev) days++;
        prev = t;
    });
    return days;
}