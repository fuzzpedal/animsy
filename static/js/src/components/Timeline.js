class Timeline {
    constructor(url) {
        this.url = url ? url : '';
        this.elements = [];
        this.length = 10000;  // milliseconds
    }

    render() {
        let out = '';
        for (let tlElem of this.elements) {
            out += tlElem.render();
        }
        return out;
    }

    toString() {
        return '<Timeline>';
    }
}


export { Timeline }