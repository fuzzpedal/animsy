(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.animsy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Keyframe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Transform = require('./Transform');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyframe = function () {
    function Keyframe() {
        _classCallCheck(this, Keyframe);

        this.transform = new _Transform.Transform();
        this.start = 0;
    }

    _createClass(Keyframe, [{
        key: 'getCode',
        value: function getCode() {
            var out = 'transform: rotate(90deg);';
            return out;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return '<Keyframe>';
        }
    }]);

    return Keyframe;
}();

exports.Keyframe = Keyframe;

},{"./Transform":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '<Point ' + this.x + ', ' + this.y + '>';
        }
    }]);

    return Point;
}();

exports.Point = Point;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timeline = function () {
    function Timeline(url) {
        _classCallCheck(this, Timeline);

        this.url = url ? url : '';
        this.elements = [];
        this.length = 10000; // milliseconds
    }

    _createClass(Timeline, [{
        key: 'render',
        value: function render() {
            var out = '';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var tlElem = _step.value;

                    out += tlElem.render();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return out;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return '<Timeline>';
        }
    }]);

    return Timeline;
}();

exports.Timeline = Timeline;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimelineElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Point = require('./Point');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimelineElement = function () {
    _createClass(TimelineElement, [{
        key: '_getProp',
        value: function _getProp(k) {
            this.props.hasOwnProperty(k) ? this.props[k] : this.defaultProps[k];
        }
    }]);

    function TimelineElement(elemId, props) {
        _classCallCheck(this, TimelineElement);

        this.defaultProps = {
            infinite: false,
            reverse: false,
            animLength: 1000,
            elemOrigin: new _Point.Point(0, 0)
        };
        this.props = props ? props : {};
        this.elemId = elemId ? elemId : '';
        this.infinite = this._getProp('infinite');
        this.reverse = this._getProp('reverse');
        this.animLength = this._getProp('animLength');
        this.elemOrigin = this._getProp('elemOrigin');

        this.keyframes = [];
    }

    _createClass(TimelineElement, [{
        key: 'render',
        value: function render() {
            return '<div class="item" id="' + this.elemId + '">' + '<div class="label" title="' + this.elemId + '">' + this.elemId + '</div>' + '</div>';
        }
    }, {
        key: 'getCode',
        value: function getCode() {
            var out = '@keyframes ' + this.elemId + ' {';
            var totalLength = 1000;
            var percentage = 100;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.keyframes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var kf = _step.value;

                    out += percentage + '% { ' + kf.getCode() + '}';
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            out += '}';

            out += '#' + this.elemId + '{ animation: ' + this.elemId + ' ' + 10000 + '; }';

            return out;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return '<TimelineElement>';
        }
    }]);

    return TimelineElement;
}();

exports.TimelineElement = TimelineElement;

},{"./Point":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Transform = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Point = require('./Point');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function () {
    function Transform() {
        _classCallCheck(this, Transform);

        this.translate = new _Point.Point(); // Point
        this.rotate = null; // float
        this.scale = null; // float
    }

    _createClass(Transform, [{
        key: 'render',
        value: function render() {}
    }, {
        key: 'toString',
        value: function toString() {
            return '<Transform ' + this.translate + '>';
        }
    }]);

    return Transform;
}();

exports.Transform = Transform;

},{"./Point":2}],6:[function(require,module,exports){
'use strict';

var _Keyframe = require('./components/Keyframe');

var _Timeline = require('./components/Timeline');

var _TimelineElement = require('./components/TimelineElement');

var timeline = new _Timeline.Timeline('http://localhost/');

var ids = ['testymctestface'];
var code = '';
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elemId = _step.value;

        var tlElem = new _TimelineElement.TimelineElement(elemId);
        var kf = new _Keyframe.Keyframe();
        kf.transform.rotate = 360;
        tlElem.keyframes.push(kf);
        code += tlElem.getCode();
        timeline.elements.push(tlElem);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

alert(code);

document.getElementById('timeline').innerHTML = timeline.render();

},{"./components/Keyframe":1,"./components/Timeline":3,"./components/TimelineElement":4}]},{},[6])(6)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvS2V5ZnJhbWUuanMiLCJzdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvUG9pbnQuanMiLCJzdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJzdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvVGltZWxpbmVFbGVtZW50LmpzIiwic3RhdGljL2pzL3NyYy9jb21wb25lbnRzL1RyYW5zZm9ybS5qcyIsInN0YXRpYy9qcy9zcmMvcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztJQUVNLFE7QUFDRix3QkFBYztBQUFBOztBQUNWLGFBQUssU0FBTCxHQUFpQiwwQkFBakI7QUFDQSxhQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7a0NBRVM7QUFDTixnQkFBSSxNQUFNLDJCQUFWO0FBQ0EsbUJBQU8sR0FBUDtBQUNIOzs7bUNBRVU7QUFDUCxtQkFBTyxZQUFQO0FBQ0g7Ozs7OztRQUtJLFEsR0FBQSxROzs7Ozs7Ozs7Ozs7O0lDcEJILEs7QUFDRixtQkFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjtBQUFBOztBQUNkLGFBQUssQ0FBTCxHQUFTLElBQUksQ0FBSixHQUFRLENBQWpCO0FBQ0EsYUFBSyxDQUFMLEdBQVMsSUFBSSxDQUFKLEdBQVEsQ0FBakI7QUFDSDs7OzttQ0FFVTtBQUNQLG1CQUFPLFlBQVksS0FBSyxDQUFqQixHQUFxQixJQUFyQixHQUE0QixLQUFLLENBQWpDLEdBQXFDLEdBQTVDO0FBQ0g7Ozs7OztRQUlJLEssR0FBQSxLOzs7Ozs7Ozs7Ozs7O0lDWkgsUTtBQUNGLHNCQUFZLEdBQVosRUFBaUI7QUFBQTs7QUFDYixhQUFLLEdBQUwsR0FBVyxNQUFNLEdBQU4sR0FBWSxFQUF2QjtBQUNBLGFBQUssUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUssTUFBTCxHQUFjLEtB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Vyx1QkFBYSxtQkFBYixDQUFmOztBQUVBLElBQUksTUFBTSxDQUFDLGlCQUFELENBQVY7QUFDQSxJQUFJLE9BQU8sRUFBWDs7Ozs7O0FBQ0EseUJBQW1CLEdBQW5CLDhIQUF3QjtBQUFBLFlBQWYsTUFBZTs7QUFDcEIsWUFBSSxTQUFTLHFDQUFvQixNQUFwQixDQUFiO0FBQ0EsWUFBSSxLQUFLLHdCQUFUO0FBQ0EsV0FBRyxTQUFILENBQWEsTUFBYixHQUFzQixHQUF0QjtBQUNBLGVBQU8sU0FBUCxDQUFpQixJQUFqQixDQUFzQixFQUF0QjtBQUNBLGdCQUFRLE9BQU8sT0FBUCxFQUFSO0FBQ0EsaUJBQVMsUUFBVCxDQUFrQixJQUFsQixDQUF1QixNQUF2QjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsTUFBTSxJQUFOOztBQUVBLFNBQVMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxTQUFwQyxHQUFnRCxTQUFTLE1BQVQsRUFBaEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0nXG5cbmNsYXNzIEtleWZyYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgIH1cblxuICAgIGdldENvZGUoKSB7XG4gICAgICAgIGxldCBvdXQgPSAndHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOydcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICc8S2V5ZnJhbWU+JztcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgeyBLZXlmcmFtZSB9IiwiY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geCA/IHggOiAwO1xuICAgICAgICB0aGlzLnkgPSB5ID8geSA6IDA7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnPFBvaW50ICcgKyB0aGlzLnggKyAnLCAnICsgdGhpcy55ICsgJz4nO1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBQb2ludCB9XG4iLCJjbGFzcyBUaW1lbGluZSB7XG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsID8gdXJsIDogJyc7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAxMDAwMDsgIC8vIG1pbGxpc2Vjb25kc1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBmb3IgKGxldCB0bEVsZW0gb2YgdGhpcy5lbGVtZW50cykge1xuICAgICAgICAgICAgb3V0ICs9IHRsRWxlbS5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJzxUaW1lbGluZT4nO1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBUaW1lbGluZSB9IiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL1BvaW50J1xuXG5cbmNsYXNzIFRpbWVsaW5lRWxlbWVudCB7XG5cbiAgICBfZ2V0UHJvcChrKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoaykgPyB0aGlzLnByb3BzW2tdIDogdGhpcy5kZWZhdWx0UHJvcHNba107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbUlkLCBwcm9wcykge1xuICAgICAgICB0aGlzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgICAgICAgYW5pbUxlbmd0aDogMTAwMCxcbiAgICAgICAgICAgIGVsZW1PcmlnaW46IG5ldyBQb2ludCgwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyA/IHByb3BzIDoge307XG4gICAgICAgIHRoaXMuZWxlbUlkID0gZWxlbUlkID8gZWxlbUlkIDogJyc7XG4gICAgICAgIHRoaXMuaW5maW5pdGUgPSB0aGlzLl9nZXRQcm9wKCdpbmZpbml0ZScpO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSB0aGlzLl9nZXRQcm9wKCdyZXZlcnNlJyk7XG4gICAgICAgIHRoaXMuYW5pbUxlbmd0aCA9IHRoaXMuX2dldFByb3AoJ2FuaW1MZW5ndGgnKTtcbiAgICAgICAgdGhpcy5lbGVtT3JpZ2luID0gdGhpcy5fZ2V0UHJvcCgnZWxlbU9yaWdpbicpO1xuXG4gICAgICAgIHRoaXMua2V5ZnJhbWVzID0gW107XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIml0ZW1cIiBpZD1cIicgKyB0aGlzLmVsZW1JZCArICdcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGFiZWxcIiB0aXRsZT1cIicgKyB0aGlzLmVsZW1JZCArICdcIj4nICsgdGhpcy5lbGVtSWQgKyAnPC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JztcbiAgICB9XG5cbiAgICBnZXRDb2RlKCkge1xuICAgICAgICBsZXQgb3V0ID0gJ0BrZXlmcmFtZXMgJyArIHRoaXMuZWxlbUlkICsgJyB7JztcbiAgICAgICAgbGV0IHRvdGFsTGVuZ3RoID0gMTAwMDtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgIGZvciAobGV0IGtmIG9mIHRoaXMua2V5ZnJhbWVzKSB7XG4gICAgICAgICAgICBvdXQgKz0gcGVyY2VudGFnZSArICclIHsgJyArIGtmLmdldENvZGUoKSArICd9JztcbiAgICAgICAgfVxuICAgICAgICBvdXQgKz0gJ30nXG5cbiAgICAgICAgb3V0ICs9ICcjJyArIHRoaXMuZWxlbUlkICsgJ3sgYW5pbWF0aW9uOiAnICsgdGhpcy5lbGVtSWQgKyAnICcgKyAxMDAwMCArICc7IH0nO1xuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnPFRpbWVsaW5lRWxlbWVudD4nO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCB7IFRpbWVsaW5lRWxlbWVudCB9IiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL1BvaW50J1xuXG5cbmNsYXNzIFRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gbmV3IFBvaW50KCk7ICAvLyBQb2ludFxuICAgICAgICB0aGlzLnJvdGF0ZSA9IG51bGw7ICAvLyBmbG9hdFxuICAgICAgICB0aGlzLnNjYWxlID0gbnVsbDsgIC8vIGZsb2F0XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJzxUcmFuc2Zvcm0gJyArIHRoaXMudHJhbnNsYXRlICsgJz4nO1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBUcmFuc2Zvcm0gfSIsImltcG9ydCB7IEtleWZyYW1lIH0gZnJvbSAnLi9jb21wb25lbnRzL0tleWZyYW1lJ1xuaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmUnXG5pbXBvcnQgeyBUaW1lbGluZUVsZW1lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmVFbGVtZW50J1xuXG5cbmxldCB0aW1lbGluZSA9IG5ldyBUaW1lbGluZSgnaHR0cDovL2xvY2FsaG9zdC8nKTtcblxubGV0IGlkcyA9IFsndGVzdHltY3Rlc3RmYWNlJyxdO1xubGV0IGNvZGUgPSAnJztcbmZvciAobGV0IGVsZW1JZCBvZiBpZHMpIHtcbiAgICBsZXQgdGxFbGVtID0gbmV3IFRpbWVsaW5lRWxlbWVudChlbGVtSWQpO1xuICAgIGxldCBrZiA9IG5ldyBLZXlmcmFtZSgpO1xuICAgIGtmLnRyYW5zZm9ybS5yb3RhdGUgPSAzNjA7XG4gICAgdGxFbGVtLmtleWZyYW1lcy5wdXNoKGtmKTtcbiAgICBjb2RlICs9IHRsRWxlbS5nZXRDb2RlKCk7XG4gICAgdGltZWxpbmUuZWxlbWVudHMucHVzaCh0bEVsZW0pO1xufVxuXG5hbGVydChjb2RlKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJykuaW5uZXJIVE1MID0gdGltZWxpbmUucmVuZGVyKCk7XG4iXX0=
