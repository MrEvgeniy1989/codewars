function perimeter(n) {
    let fib = [0, 1];
    for (let i = 0; i < n; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.reduce((a, b) => a + b) * 4;
}