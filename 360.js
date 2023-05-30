// https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name
}

duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 22)
duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 12)