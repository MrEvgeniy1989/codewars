// https://www.codewars.com/kata/545993ee52756d98ca0010e1/train/javascript
function none(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return false;
        }
    }

    return true;
}