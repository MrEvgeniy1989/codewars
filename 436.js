// https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/javascript
class Cube {
    constructor(side) {
        this.setSide(side || 0);
    }

    getSide() {
        return this.side;
    }

    setSide(n) {
        this.side = Math.abs(n);
    }
}
