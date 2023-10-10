// https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript
function whoseBicycle(dairy1, dairy2, dairy3) {
    const diaries = [dairy1, dairy2, dairy3];
    const son = {
        0: 'first',
        1: 'second',
        2: 'third'
    };
    const scores = diaries.map((diary, index) => {
        const keys = Object.keys(diary);

        return keys.reduce((acc, cur) => acc + diary[cur], 0);
    });

    const maxValue = Math.max(...scores);

    const maxDiary = scores.lastIndexOf(maxValue);

    return `I need to buy a bicycle for my ${son[maxDiary]} son.`;
}