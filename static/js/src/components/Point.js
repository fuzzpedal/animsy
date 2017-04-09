class Point {
    constructor(x, y) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    toString() {
        return '<Point ' + this.x + ', ' + this.y + '>';
    }
}


export { Point }
