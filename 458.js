// https://www.codewars.com/kata/5612a42e746aa62de100001a/train/javascript
function dBScale(intensity) {
    const thresholdOfHearing = 1e-12; // 1e-12 W/m²

    const loudnessInDecibels = Math.round(10 * Math.log10(intensity / thresholdOfHearing));

    return loudnessInDecibels;
}