function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let pos = [0, 0];

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                pos[1]++;
                break;
            case 's':
                pos[1]--;
                break;
            case 'e':
                pos[0]++;
                break;
            case 'w':
                pos[0]--;
                break;
        }
    }

    return pos[0] === 0 && pos[1] === 0;
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])