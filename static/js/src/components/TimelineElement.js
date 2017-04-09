import { Point } from './Point'


class TimelineElement {

    _getProp(k) {
        this.props.hasOwnProperty(k) ? this.props[k] : this.defaultProps[k];
    }

    constructor(elemId, props) {
        this.defaultProps = {
            infinite: false,
            reverse: false,
            animLength: 1000,
            elemOrigin: new Point(0, 0)
        }
        this.props = props ? props : {};
        this.elemId = elemId ? elemId : '';
        this.infinite = this._getProp('infinite');
        this.reverse = this._getProp('reverse');
        this.animLength = this._getProp('animLength');
        this.elemOrigin = this._getProp('elemOrigin');

        this.keyframes = [];

    }

    render() {
        return '<div class="item" id="' + this.elemId + '">' +
            '<div class="label" title="' + this.elemId + '">' + this.elemId + '</div>' +
            '</div>';
    }

    getCode() {
        let out = '@keyframes ' + this.elemId + ' {';
        let totalLength = 1000;
        let percentage = 100;
        for (let kf of this.keyframes) {
            out += percentage + '% { ' + kf.getCode() + '}';
        }
        out += '}'

        out += '#' + this.elemId + '{ animation: ' + this.elemId + ' ' + 10000 + '; }';

        return out;
    }

    toString() {
        return '<TimelineElement>';
    }

}


export { TimelineElement }