// https://www.codewars.com/kata/57a93f93bb9944516d0000c1/train/javascript
class Dictionary {
  constructor() {
    this.dict = {}
  }

  newEntry(key, value) {
    this.dict[key] = value
  }

  look(key) {
    return this.dict[key] || `Can\'t find entry for ${key}`
  }
}
