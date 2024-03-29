// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/
function zero(func) {
    if (func) {
        return func(0);
    }
    return 0;
}

function one(func) {
    if (func) {
        return func(1);
    }
    return 1;
}

function two(func) {
    if (func) {
        return func(2);
    }
    return 2;
}

function three(func) {
    if (func) {
        return func(3);
    }
    return 3;
}

function four(func) {
    if (func) {
        return func(4);
    }
    return 4;
}

function five(func) {
    if (func) {
        return func(5);
    }
    return 5;
}

function six(func) {
    if (func) {
        return func(6);
    }
    return 6;
}

function seven(func) {
    if (func) {
        return func(7);
    }
    return 7;
}

function eight(func) {
    if (func) {
        return func(8);
    }
    return 8;
}

function nine(func) {
    if (func) {
        return func(9);
    }
    return 9;
}

function plus(x) {
    return function(y) {
        return x + y;
    }
}

function minus(x) {
    return function(y) {
        return y - x;
    }
}

function times(x) {
    return function(y) {
        return x * y;
    }
}

function dividedBy(x) {
    return function(y) {
        return Math.floor(y / x);
    }
}