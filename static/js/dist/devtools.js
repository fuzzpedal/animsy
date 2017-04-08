(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.animsy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

chrome.devtools.panels.create("Animsy", "icon.png", "Panel.html", function (panel) {
    console.log('panel created');
});

chrome.devtools.inspectedWindow.eval("document.getElementById('test').innerHTML = 'Boom!'", function (result, isException) {
    console.log(result);
});

document.getElementById('timeline').innerHTML = '----';

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvc3JjL2RldnRvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBdUIsTUFBdkIsQ0FBOEIsUUFBOUIsRUFDSSxVQURKLEVBRUksWUFGSixFQUdJLFVBQVUsS0FBVixFQUFpQjtBQUNiLFlBQVEsR0FBUixDQUFZLGVBQVo7QUFDSCxDQUxMOztBQVFBLE9BQU8sUUFBUCxDQUFnQixlQUFoQixDQUFnQyxJQUFoQyxDQUNJLHFEQURKLEVBRUksVUFBUyxNQUFULEVBQWlCLFdBQWpCLEVBQThCO0FBQzFCLFlBQVEsR0FBUixDQUFZLE1BQVo7QUFDSCxDQUpMOztBQU9BLFNBQVMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxTQUFwQyxHQUFnRCxNQUFoRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjaHJvbWUuZGV2dG9vbHMucGFuZWxzLmNyZWF0ZShcIkFuaW1zeVwiLFxuICAgIFwiaWNvbi5wbmdcIixcbiAgICBcIlBhbmVsLmh0bWxcIixcbiAgICBmdW5jdGlvbiAocGFuZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhbmVsIGNyZWF0ZWQnKTtcbiAgICB9XG4pO1xuXG5jaHJvbWUuZGV2dG9vbHMuaW5zcGVjdGVkV2luZG93LmV2YWwoXG4gICAgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpLmlubmVySFRNTCA9ICdCb29tISdcIixcbiAgICBmdW5jdGlvbihyZXN1bHQsIGlzRXhjZXB0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICB9XG4pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZWxpbmUnKS5pbm5lckhUTUwgPSAnLS0tLSdcblxuIl19
