import { Transform } from './Transform'

class Keyframe {
    constructor() {
        this.transform = new Transform();
        this.start = 0;
    }

    getCode() {
        let out = 'transform: rotate(90deg);'
        return out;
    }

    toString() {
        return '<Keyframe>';
    }

}


export { Keyframe }