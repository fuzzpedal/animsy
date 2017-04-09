(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.animsy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
            length: 1000,
            elemOrigin: new _Point.Point(0, 0)
        };
        this.props = props ? props : {};
        this.elemId = elemId ? elemId : '';
        this.infinite = this._getProp('infinite');
        this.reverse = this._getProp('reverse');
        this.length = this._getProp('length');
        this.elemOrigin = this._getProp('elemOrigin');

        this.keyframes = [];
    }

    _createClass(TimelineElement, [{
        key: 'render',
        value: function render() {
            return '<div class="item" id="' + this.elemId + '">' + '<div class="label" title="' + this.elemId + '">' + this.elemId + '</div>' + '</div>';
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

},{"./Point":1}],4:[function(require,module,exports){
'use strict';

var _Timeline = require('./components/Timeline');

var _TimelineElement = require('./components/TimelineElement');

var timeline = new _Timeline.Timeline('http://localhost/');

var ids = ['testymctestface'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elemId = _step.value;

        var tlElem = new _TimelineElement.TimelineElement(elemId);
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

document.getElementById('timeline').innerHTML = timeline.render();

},{"./components/Timeline":2,"./components/TimelineElement":3}]},{},[4])(4)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvUG9pbnQuanMiLCJzdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJzdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvVGltZWxpbmVFbGVtZW50LmpzIiwic3RhdGljL2pzL3NyYy9wYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTSxLO0FBQ0YsbUJBQVksQ0FBWixFQUFlLENBQWYsRUFBa0I7QUFBQTs7QUFDZCxhQUFLLENBQUwsR0FBUyxJQUFJLENBQUosR0FBUSxDQUFqQjtBQUNBLGFBQUssQ0FBTCxHQUFTLElBQUksQ0FBSixHQUFRLENBQWpCO0FBQ0g7Ozs7bUNBRVU7QUFDUCxtQkFBTyxZQUFZLEtBQUssQ0FBakIsR0FBcUIsSUFBckIsR0FBNEIsS0FBSyxDQUFqQyxHQUFxQyxHQUE1QztBQUNIOzs7Ozs7UUFJSSxLLEdBQUEsSzs7Ozs7Ozs7Ozs7OztJQ1pILFE7QUFDRixzQkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2IsYUFBSyxHQUFMLEdBQVcsTUFBTSxHQUFOLEdBQVksRUFBdkI7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7OztpQ0FFUTtBQUNMLGdCQUFJLE1BQU0sRUFBVjtBQURLO0FBQUE7QUFBQTs7QUFBQTtBQUVMLHFDQUFtQixLQUFLLFFBQXhCLDhIQUFrQztBQUFBLHdCQUF6QixNQUF5Qjs7QUFDOUIsMkJBQU8sT0FBTyxNQUFQLEVBQVA7QUFDSDtBQUpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0wsbUJBQU8sR0FBUDtBQUNIOzs7bUNBRVU7QUFDUCxtQkFBTyxZQUFQO0FBQ0g7Ozs7OztRQUlJLFEsR0FBQSxROzs7Ozs7Ozs7Ozs7QUNwQlQ7Ozs7SUFHTSxlOzs7aUNBRU8sQyxFQUFHO0FBQ1IsaUJBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsQ0FBMUIsSUFBK0IsS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUEvQixHQUErQyxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBL0M7QUFDSDs7O0FBRUQsNkJBQVksTUFBWixFQUFvQixLQUFwQixFQUEyQjtBQUFBOztBQUN2QixhQUFLLFlBQUwsR0FBb0I7QUFDaEIsc0JBQVUsS0FETTtBQUVoQixxQkFBUyxLQUZPO0FBR2hCLG9CQUFRLElBSFE7QUFJaEIsd0JBQVksaUJBQVUsQ0FBVixFQUFhLENBQWI7QUFKSSxTQUFwQjtBQU1BLGFBQUssS0FBTCxHQUFhLFFBQVEsS0FBUixHQUFnQixFQUE3QjtBQUNBLGFBQUssTUFBTCxHQUFjLFNBQVMsTUFBVCxHQUFrQixFQUFoQztBQUNBLGFBQUssUUFBTCxHQUFnQixLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQWhCO0FBQ0EsYUFBSyxPQUFMLEdBQWUsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUFmO0FBQ0EsYUFBSyxNQUFMLEdBQWMsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUFkO0FBQ0EsYUFBSyxVQUFMLEdBQWtCLEtBQUssUUFBTCxDQUFjLFlBQWQsQ0FBbEI7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLEVBQWpCO0FBRUg7Ozs7aUNBRVE7QUFDTCxtQkFBTywyQkFBMkIsS0FBSyxNQUFoQyxHQUF5QyxJQUF6QyxHQUNILDRCQURHLEdBQzRCLEtBQUssTUFEakMsR0FDMEMsSUFEMUMsR0FDaUQsS0FBSyxNQUR0RCxHQUMrRCxRQUQvRCxHQUVILFFBRko7QUFHSDs7O21DQUVVO0FBQ1AsbUJBQU8sbUJBQVA7QUFDSDs7Ozs7O1FBS0ksZSxHQUFBLGU7Ozs7O0FDeENUOztBQUNBOztBQUlBLElBQUksV0FBVyx1QkFBYSxtQkFBYixDQUFmOztBQUVBLElBQUksTUFBTSxDQUFDLGlCQUFELENBQVY7Ozs7Ozs7QUFFQSx5QkFBbUIsR0FBbkIsOEhBQXdCO0FBQUEsWUFBZixNQUFlOztBQUNwQixZQUFJLFNBQVMscUNBQW9CLE1BQXBCLENBQWI7QUFDQSxpQkFBUyxRQUFULENBQWtCLElBQWxCLENBQXVCLE1BQXZCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsU0FBcEMsR0FBZ0QsU0FBUyxNQUFULEVBQWhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIFBvaW50IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHggPyB4IDogMDtcbiAgICAgICAgdGhpcy55ID0geSA/IHkgOiAwO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJzxQb2ludCAnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICc+JztcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgUG9pbnQgfVxuIiwiY2xhc3MgVGltZWxpbmUge1xuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybCA/IHVybCA6ICcnO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IHRsRWxlbSBvZiB0aGlzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICBvdXQgKz0gdGxFbGVtLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnPFRpbWVsaW5lPic7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IFRpbWVsaW5lIH0iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vUG9pbnQnXG5cblxuY2xhc3MgVGltZWxpbmVFbGVtZW50IHtcblxuICAgIF9nZXRQcm9wKGspIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShrKSA/IHRoaXMucHJvcHNba10gOiB0aGlzLmRlZmF1bHRQcm9wc1trXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtSWQsIHByb3BzKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXG4gICAgICAgICAgICBsZW5ndGg6IDEwMDAsXG4gICAgICAgICAgICBlbGVtT3JpZ2luOiBuZXcgUG9pbnQoMCwgMClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHMgPyBwcm9wcyA6IHt9O1xuICAgICAgICB0aGlzLmVsZW1JZCA9IGVsZW1JZCA/IGVsZW1JZCA6ICcnO1xuICAgICAgICB0aGlzLmluZmluaXRlID0gdGhpcy5fZ2V0UHJvcCgnaW5maW5pdGUnKTtcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gdGhpcy5fZ2V0UHJvcCgncmV2ZXJzZScpO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMuX2dldFByb3AoJ2xlbmd0aCcpO1xuICAgICAgICB0aGlzLmVsZW1PcmlnaW4gPSB0aGlzLl9nZXRQcm9wKCdlbGVtT3JpZ2luJyk7XG5cbiAgICAgICAgdGhpcy5rZXlmcmFtZXMgPSBbXTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiaXRlbVwiIGlkPVwiJyArIHRoaXMuZWxlbUlkICsgJ1wiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsYWJlbFwiIHRpdGxlPVwiJyArIHRoaXMuZWxlbUlkICsgJ1wiPicgKyB0aGlzLmVsZW1JZCArICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJzxUaW1lbGluZUVsZW1lbnQ+JztcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgeyBUaW1lbGluZUVsZW1lbnQgfSIsImltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAnLi9jb21wb25lbnRzL1RpbWVsaW5lJ1xuaW1wb3J0IHsgVGltZWxpbmVFbGVtZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1RpbWVsaW5lRWxlbWVudCdcblxuXG5cbmxldCB0aW1lbGluZSA9IG5ldyBUaW1lbGluZSgnaHR0cDovL2xvY2FsaG9zdC8nKTtcblxubGV0IGlkcyA9IFsndGVzdHltY3Rlc3RmYWNlJyxdO1xuXG5mb3IgKGxldCBlbGVtSWQgb2YgaWRzKSB7XG4gICAgbGV0IHRsRWxlbSA9IG5ldyBUaW1lbGluZUVsZW1lbnQoZWxlbUlkKTtcbiAgICB0aW1lbGluZS5lbGVtZW50cy5wdXNoKHRsRWxlbSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZScpLmlubmVySFRNTCA9IHRpbWVsaW5lLnJlbmRlcigpO1xuIl19
