(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.animsy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimelineItem = function () {
    function TimelineItem(id) {
        _classCallCheck(this, TimelineItem);

        this.id = id;
    }

    _createClass(TimelineItem, [{
        key: 'render',
        value: function render() {
            return '';
        }
    }, {
        key: 'toString',
        value: function toString() {
            return 'TimelineItem: ' + this.id;
        }
    }]);

    return TimelineItem;
}();

var ids = ['test', 'thing'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;

        var tlItem = new TimelineItem(id);
        alert(tlItem);
        //    alert(id);
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

document.getElementById('timeline').innerHTML = '--------';

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvc3JjL3BhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQU0sWTtBQUNGLDBCQUFZLEVBQVosRUFBZ0I7QUFBQTs7QUFDWixhQUFLLEVBQUwsR0FBVSxFQUFWO0FBQ0g7Ozs7aUNBRVE7QUFDTCxtQkFBTyxFQUFQO0FBQ0g7OzttQ0FFVTtBQUNQLG1CQUFPLG1CQUFtQixLQUFLLEVBQS9CO0FBQ0g7Ozs7OztBQUdMLElBQUksTUFBTSxDQUFDLE1BQUQsRUFBUyxPQUFULENBQVY7Ozs7OztBQUNBLHlCQUFlLEdBQWYsOEhBQW9CO0FBQUEsWUFBWCxFQUFXOztBQUNoQixZQUFJLFNBQVMsSUFBSSxZQUFKLENBQWlCLEVBQWpCLENBQWI7QUFDQSxjQUFNLE1BQU47QUFDSjtBQUNDOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsU0FBUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLFNBQXBDLEdBQWdELFVBQWhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIFRpbWVsaW5lSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnVGltZWxpbmVJdGVtOiAnICsgdGhpcy5pZDtcbiAgICB9XG59XG5cbmxldCBpZHMgPSBbJ3Rlc3QnLCAndGhpbmcnXTtcbmZvciAobGV0IGlkIG9mIGlkcykge1xuICAgIGxldCB0bEl0ZW0gPSBuZXcgVGltZWxpbmVJdGVtKGlkKTtcbiAgICBhbGVydCh0bEl0ZW0pO1xuLy8gICAgYWxlcnQoaWQpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZWxpbmUnKS5pbm5lckhUTUwgPSAnLS0tLS0tLS0nIl19
