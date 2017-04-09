import { Transform } from './Transform'

class Keyframe {
    constructor() {
        this.transform = new Transform();
        this.rotate = null;  // float
        this.scale = null;  // float
    }

    toString() {
        return '<Keyframe>';
    }

}


export { Keyframe }