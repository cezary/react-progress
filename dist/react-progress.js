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
	    var progressStyle = this.props.style || {
	      display: "inline-block",
	      position: "fixed",
	      top: 0,
	      left: 0,
	      width: "" + this.props.percent + "%",
	      maxWidth: "100% !important",
	      height: "" + this.props.height + "px",
	      boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
	      borderRadius: "0 1px 1px 0",
	      WebkitTransition: "" + this.props.speed + "s width, " + this.props.speed + "s background-color",
	      transition: "" + this.props.speed + "s width, " + this.props.speed + "s background-color"
	    };
	
	    if (this.props.color && this.props.color !== "rainbow") {
	      progressStyle.backgroundColor = this.props.color;
	    } else {
	      progressStyle.backgroundImage = "linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)";
	      progressStyle.backgroundSize = "100vw " + this.props.height + "px";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NzQxNzRiODQ4ZmY2YjQzN2RmYSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcmVhY3QtcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7OztBQ3RDQSxPQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQyxDOzs7Ozs7OztBQ0FoRCxLQUFJLEtBQUssR0FBRyxtQkFBTyxDQUFDLENBQU8sQ0FBQyxDQUFDOztBQUU3QixPQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDakMsY0FBVyxFQUFFLFVBQVU7O0FBRXZCLGtCQUFlLEVBQUUsWUFBVztBQUMxQixZQUFPO0FBQ0wsWUFBSyxFQUFFLFNBQVM7QUFDaEIsYUFBTSxFQUFFLENBQUM7QUFDVCxjQUFPLEVBQUUsQ0FBQztBQUNWLFlBQUssRUFBRSxHQUFFO01BQ1YsQ0FBQztJQUNIOztBQUVELFNBQU0sRUFBRSxZQUFZO0FBQ2xCLFNBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJO0FBQ3RDLGNBQU8sRUFBRSxjQUFjO0FBQ3ZCLGVBQVEsRUFBRSxPQUFPO0FBQ2pCLFVBQUcsRUFBRSxDQUFDO0FBQ04sV0FBSSxFQUFFLENBQUM7QUFDUCxZQUFLLE9BQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQUc7QUFDL0IsZUFBUSxFQUFFLGlCQUFpQjtBQUMzQixhQUFNLE9BQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLE9BQUk7QUFDaEMsZ0JBQVMsRUFBRSw2QkFBNkI7QUFDeEMsbUJBQVksRUFBRSxhQUFhO0FBQzNCLHVCQUFnQixPQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssdUJBQW9CO0FBQ3JGLGlCQUFVLE9BQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGlCQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyx1QkFBb0I7TUFDaEYsQ0FBQzs7QUFFRixTQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUN0RCxvQkFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUNsRCxNQUFNO0FBQ0wsb0JBQWEsQ0FBQyxlQUFlLEdBQUcsaUZBQWlGLENBQUM7QUFDbEgsb0JBQWEsQ0FBQyxjQUFjLGNBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLE9BQUksQ0FBQztNQUMvRDs7QUFFRCxZQUFPLDZCQUFLLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLGFBQWMsR0FBTyxDQUFDO0lBQy9EO0VBQ0YsQ0FBQyxDOzs7Ozs7QUN0Q0YsZ0QiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJSZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQcm9ncmVzc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQcm9ncmVzc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODc0MTc0Yjg0OGZmNmI0MzdkZmFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3JlYWN0LXByb2dyZXNzJyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUHJvZ3Jlc3MnLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiAnIzU1OEFCQicsXG4gICAgICBoZWlnaHQ6IDIsXG4gICAgICBwZXJjZW50OiAwLFxuICAgICAgc3BlZWQ6IC40XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvZ3Jlc3NTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGUgfHwge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB3aWR0aDogYCR7dGhpcy5wcm9wcy5wZXJjZW50fSVgLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmhlaWdodH1weGAsXG4gICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuNCknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMCAxcHggMXB4IDAnLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogYCR7dGhpcy5wcm9wcy5zcGVlZH1zIHdpZHRoLCAke3RoaXMucHJvcHMuc3BlZWR9cyBiYWNrZ3JvdW5kLWNvbG9yYCxcbiAgICAgIHRyYW5zaXRpb246IGAke3RoaXMucHJvcHMuc3BlZWR9cyB3aWR0aCwgJHt0aGlzLnByb3BzLnNwZWVkfXMgYmFja2dyb3VuZC1jb2xvcmBcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY29sb3IgJiYgdGhpcy5wcm9wcy5jb2xvciAhPT0gJ3JhaW5ib3cnKSB7XG4gICAgICBwcm9ncmVzc1N0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMucHJvcHMuY29sb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzU3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjZDk2NCwgIzVhYzhmYSwgIzAwN2FmZiwgIzM0YWFkYywgIzU4NTZkNiwgI0ZGMkQ1NSknO1xuICAgICAgcHJvZ3Jlc3NTdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGAxMDB2dyAke3RoaXMucHJvcHMuaGVpZ2h0fXB4YDtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzJyBzdHlsZT17cHJvZ3Jlc3NTdHlsZX0+PC9kaXY+O1xuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3JlYWN0LXByb2dyZXNzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6Ii4vZGlzdC9yZWFjdC1wcm9ncmVzcy5qcyJ9