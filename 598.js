// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
function diamond(n) {
    // Проверка на четность и отрицательность
    if (n <= 0 || n % 2 === 0) {
        return null;
    }

    let diamond = '';
    const halfSize = Math.floor(n / 2);

    // Верхняя половина ромба
    for (let i = 0; i < halfSize; i++) {
        const spaces = ' '.repeat(halfSize - i);
        const stars = '*'.repeat(2 * i + 1);
        diamond += spaces + stars + '\n';
    }

    // Середина ромба
    diamond += '*'.repeat(n) + '\n';

    // Нижняя половина ромба
    for (let i = halfSize - 1; i >= 0; i--) {
        const spaces = ' '.repeat(halfSize - i);
        const stars = '*'.repeat(2 * i + 1);
        diamond += spaces + stars + '\n';
    }

    return diamond;
}

diamond(15)