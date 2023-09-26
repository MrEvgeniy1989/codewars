<<<<<<< HEAD
// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
=======
>>>>>>> origin/main
function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(
        Math.log(desired / principal) /
        Math.log(1 + interest * (1 - tax))
    );
}