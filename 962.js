class Song {
  constructor(title, artist) {
    this.title = title
    this.artist = artist
    this.listener = new Set()
  }
  howMany(people) {
    let oldSize = this.listener.size
    people.map((p) => this.listener.add(p.toLowerCase()))
    return this.listener.size - oldSize
  }
}
