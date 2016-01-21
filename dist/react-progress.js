(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Progress"] = factory(require("react"));
	else
		root["Progress"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var defaultProps = {
	  color: 'rainbow',
	  height: 2,
	  hideDelay: .4,
	  percent: 0,
	  speed: .4,
	  style: {}
	};

	exports['default'] = function (props) {
	  props = _extends({}, defaultProps, props);

	  var containerStyle = {
	    opacity: props.percent < 100 ? 1 : 0,
	    WebkitTransition: props.speed + 's opacity',
	    transition: props.speed + 's opacity',
	    WebkitTransitionDelay: (props.percent < 100 ? 0 : props.hideDelay) + 's',
	    transitionDelay: (props.percent < 100 ? 0 : props.hideDelay) + 's'
	  };

	  var barStyle = _extends({
	    display: 'inline-block',
	    position: 'fixed',
	    top: 0,
	    left: 0,
	    width: props.percent + '%',
	    maxWidth: '100% !important',
	    height: props.height + 'px',
	    boxShadow: '1px 1px 1px rgba(0,0,0,0.4)',
	    borderRadius: '0 1px 1px 0',
	    WebkitTransition: props.speed + 's width, ' + props.speed + 's background-color',
	    transition: props.speed + 's width, ' + props.speed + 's background-color'
	  }, props.style);

	  if (props.color === 'rainbow') {
	    barStyle.backgroundImage = props.style.backgroundImage || 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
	    barStyle.backgroundSize = props.style.backgroundSize || '100vw ' + props.height + 'px';
	  } else {
	    barStyle.backgroundColor = props.style.backgroundColor || props.color;
	  }

	  return _react2['default'].createElement(
	    'div',
	    { className: 'progress', style: containerStyle },
	    _react2['default'].createElement('div', { className: 'progress__bar', style: barStyle })
	  );
	};

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;