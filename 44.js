/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */
function findAverage(array) {
    // your code here
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average = average + array[i];
    }
    average = average / array.length;
    if (array == "") return 0;
    return average;
}