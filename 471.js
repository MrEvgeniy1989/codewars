// https://www.codewars.com/kata/5b609ebc8f47bd595e000627/train/javascript
const solution = (arr_val, arr_unit) => {
    const G = 6.67e-11;

    const massUnits = {
        kg: 1,
        g: 1e-3,
        mg: 1e-6,
        μg: 1e-9,
        lb: 0.453592,
    };

    const distanceUnits = {
        m: 1,
        cm: 1e-2,
        mm: 1e-3,
        μm: 1e-6,
        ft: 0.3048,
    };

    const [mass1, mass2, distance] = arr_val;
    const [unit1, unit2, unitDistance] = arr_unit;

    const mass1Kg = mass1 * massUnits[unit1];
    const mass2Kg = mass2 * massUnits[unit2];
    const distanceMeters = distance * distanceUnits[unitDistance];

    const force = (G * mass1Kg * mass2Kg) / Math.pow(distanceMeters, 2);

    return force;
};
