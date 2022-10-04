function positiveSum(arr) {

    for (var n = 0, sum = 0; n < arr.length; n++) {
        if (arr[n] > 0) {
            sum = sum + arr[n];
        }
    }
    return sum;

}