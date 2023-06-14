// https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/train/javascript
function getStatus(isBusy) {
    let msg = (isBusy ? "busy" : "available");
    return {status: msg}
}

console.log(getStatus(true).status);