function dirReduc(arr) {
    const opposite = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    };

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.length > 0 && opposite[arr[i]] === result[result.length - 1]) {
            result.pop();
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])