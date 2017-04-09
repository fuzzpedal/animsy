import { Point } from './Point'


class TimelineElement {

    _getProp(k) {
        this.props.hasOwnProperty(k) ? this.props[k] : this.defaultProps[k];
    }

    constructor(elemId, props) {
        this.defaultProps = {
            infinite: false,
            reverse: false,
            length: 1000,
            elemOrigin: new Point(0, 0)
        }
        this.props = props ? props : {};
        this.elemId = elemId ? elemId : '';
        this.infinite = this._getProp('infinite');
        this.reverse = this._getProp('reverse');
        this.length = this._getProp('length');
        this.elemOrigin = this._getProp('elemOrigin');

        this.keyframes = [];

    }

    render() {
        return '<div class="item" id="' + this.elemId + '">' +
            '<div class="label" title="' + this.elemId + '">' + this.elemId + '</div>' +
            '</div>';
    }

    toString() {
        return '<TimelineElement>';
    }

}


export { TimelineElement }