// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
"use strict";

function flattenAndSort(array) {
    if (array.length === 0) return []
    if (array.length === 1 && array[0].length === 0) return []
    if (array.length === 2 && array[0].length === 0 && array[1].length === 0) return []

    let result = []
    for (const arrayElement of array) {
        result = result.concat(arrayElement)
    }
    return result.sort((a, b) => a - b)
}

flattenAndSort([[], [1]])