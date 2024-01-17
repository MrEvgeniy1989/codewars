// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
function sumIntervals(intervals) {
    let mergedIntervals = [];

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i];

        if (mergedIntervals.length === 0 || currentInterval[0] > mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals.push(currentInterval);
        } else {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], currentInterval[1]);
        }
    }

    return mergedIntervals.reduce((acc, interval) => acc + (interval[1] - interval[0]), 0);
}

sumIntervals([[1, 5], [1, 6]])
sumIntervals([[1, 4], [7, 10], [3, 5]])
