import { Point } from './Point'


class Transform {
    constructor() {
        this.translate = new Point();  // Point
        this.rotate = null;  // float
        this.scale = null;  // float
    }

    render() {
    }

    toString() {
        return '<Transform ' + this.translate + '>';
    }
}


export { Transform }