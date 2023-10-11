// https://www.codewars.com/kata/52a6b34e43c2484ac10000cd/train/javascript
function getName(person) {
    return person.name;
}

function wasNice(person) {
    return person.wasNice;
}

function wasNaughty(person) {
    return !wasNice(person);
}

function getNiceNames(people) {
    return people.filter(wasNice).map(getName);
}

function getNaughtyNames(people) {
    return people.filter(wasNaughty).map(getName);
}