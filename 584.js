// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
function solution(inputString, markers) {
    return inputString
        .split('\n')
        .reduce((result, line) => {
            markers.forEach((marker) => {
                const index = line.indexOf(marker);
                if (index !== -1) {
                    line = line.substring(0, index);
                }
            });
            result.push(line.trimEnd());
            return result;
        }, []).join('\n');
}