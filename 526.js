// https://www.codewars.com/kata/64fd5072fa88ae669bf15342/train/javascript
function treePhotography(trees) {
    let left = 0
    let right = 0
    let currentLeft = 0
    let currentRight = 0

    for (let i = 0; i < trees.length; i++) {
        if (trees[i] > currentLeft) {
            currentLeft = trees[i]
            left++
        }
    }

    for (let i = trees.length - 1; i >= 0; i--) {
        if (trees[i] > currentRight) {
            currentRight = trees[i]
            right++
        }
    }
    return right > left ? 'right' : 'left'
}