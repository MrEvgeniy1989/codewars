// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')