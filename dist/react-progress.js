(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Progress"] = factory(require("React"));
	else
		root["Progress"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(2);
	
	function merge(a, b) {
	  var object = {};
	  Object.keys(a).forEach(function (key) {
	    object[key] = a[key];
	  });
	  Object.keys(b).forEach(function (key) {
	    object[key] = b[key];
	  });
	  return object;
	}
	
	module.exports = React.createClass({
	  displayName: "Progress",
	
	  getDefaultProps: function () {
	    return {
	      height: 2,
	      percent: 0,
	      speed: 0.4,
	      style: {}
	    };
	  },
	
	  render: function () {
	    var progressStyle = merge({
	      display: "inline-block",
	      position: "fixed",
	      top: 0,
	      left: 0,
	      width: this.props.percent + "%",
	      maxWidth: "100% !important",
	      height: this.props.height + "px",
	      boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
	      borderRadius: "0 1px 1px 0",
	      WebkitTransition: this.props.speed + "s width, " + this.props.speed + "s background-color",
	      transition: this.props.speed + "s width, " + this.props.speed + "s background-color"
	    }, this.props.style);
	
	    if (this.props.color && this.props.color !== "rainbow") {
	      progressStyle.backgroundColor = this.props.style.backgroundColor || this.props.color;
	    } else {
	      progressStyle.backgroundImage = this.props.style.backgroundImage || "linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)";
	      progressStyle.backgroundSize = this.props.style.backgroundSize || "100vw " + this.props.height + "px";
	    }
	
	    return React.createElement("div", { className: "progress", style: progressStyle });
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-progress.map