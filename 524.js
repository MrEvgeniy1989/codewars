// https://www.codewars.com/kata/652a19cd7e92f356f437d059/train/javascript
class Class {
    static #foo = 42;

    static get foo() {
        return Class.#foo;
    }
}