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
	
	module.exports = React.createClass({
	  displayName: "Progress",
	
	  getDefaultProps: function () {
	    return {
	      color: "#558ABB",
	      height: 2,
	      percent: 0,
	      speed: 0.4
	    };
	  },
	
	  render: function () {
	    var progressStyle = {
	      display: "inline-block",
	      position: "fixed",
	      top: 0,
	      left: 0,
	      width: this.props.percent + "%",
	      maxWidth: "100% !important",
	      height: this.props.height + "px",
	      backgroundColor: this.props.color,
	      boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
	      borderRadius: "0 1px 1px 0",
	      WebkitTransition: this.props.speed + "s width, " + this.props.speed + "s background-color",
	      transition: this.props.speed + "s width, " + this.props.speed + "s background-color"
	    };
	
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

//# sourceMappingURL=react-progress.map