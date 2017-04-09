class Timeline {
    constructor(url) {
        this.url = url ? url : '';
        this.elements = [];
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