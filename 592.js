function permutations(string) {
    if (string.length === 1) {
        return [string];
    }

    // Используем рекурсию для генерации перестановок для подстроки без первого символа
    const result = [];
    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];
        const remainingChars = string.slice(0, i) + string.slice(i + 1);
        const permutationsOfRemaining = permutations(remainingChars);

        // Добавляем текущий символ к каждой перестановке подстроки
        for (const perm of permutationsOfRemaining) {
            result.push(currentChar + perm);
        }
    }

    // Убираем дубликаты, если они есть
    return [...new Set(result)];
}

permutations('aabb')