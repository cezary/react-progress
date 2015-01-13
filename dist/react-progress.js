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
	      color: "#558ABB",
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
	      width: "" + this.props.percent + "%",
	      maxWidth: "100% !important",
	      height: "" + this.props.height + "px",
	      boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
	      borderRadius: "0 1px 1px 0",
	      WebkitTransition: "" + this.props.speed + "s width, " + this.props.speed + "s background-color",
	      transition: "" + this.props.speed + "s width, " + this.props.speed + "s background-color"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYTI4YjliNDE2NDYzNDk1ZDlkMCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcmVhY3QtcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7OztBQ3RDQSxPQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQyxDOzs7Ozs7OztBQ0FoRCxLQUFJLEtBQUssR0FBRyxtQkFBTyxDQUFDLENBQU8sQ0FBQyxDQUFDOztBQUU3QixVQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25CLE9BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixTQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUcsRUFBRTtBQUFFLFdBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFBRSxDQUFDLENBQUM7QUFDaEUsU0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFBRSxXQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0FBQ2hFLFVBQU8sTUFBTSxDQUFDO0VBQ2Y7O0FBRUQsT0FBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ2pDLGNBQVcsRUFBRSxVQUFVOztBQUV2QixrQkFBZSxFQUFFLFlBQVc7QUFDMUIsWUFBTztBQUNMLFlBQUssRUFBRSxTQUFTO0FBQ2hCLGFBQU0sRUFBRSxDQUFDO0FBQ1QsY0FBTyxFQUFFLENBQUM7QUFDVixZQUFLLEVBQUUsR0FBRTtBQUNULFlBQUssRUFBRSxFQUFFO01BQ1YsQ0FBQztJQUNIOztBQUVELFNBQU0sRUFBRSxZQUFZO0FBQ2xCLFNBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztBQUN4QixjQUFPLEVBQUUsY0FBYztBQUN2QixlQUFRLEVBQUUsT0FBTztBQUNqQixVQUFHLEVBQUUsQ0FBQztBQUNOLFdBQUksRUFBRSxDQUFDO0FBQ1AsWUFBSyxPQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxNQUFHO0FBQy9CLGVBQVEsRUFBRSxpQkFBaUI7QUFDM0IsYUFBTSxPQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxPQUFJO0FBQ2hDLGdCQUFTLEVBQUUsNkJBQTZCO0FBQ3hDLG1CQUFZLEVBQUUsYUFBYTtBQUMzQix1QkFBZ0IsT0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssaUJBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLHVCQUFvQjtBQUNyRixpQkFBVSxPQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssdUJBQW9CO01BQ2hGLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFckIsU0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7QUFDdEQsb0JBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQ3RGLE1BQU07QUFDTCxvQkFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksaUZBQWlGLENBQUM7QUFDdEosb0JBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxlQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxPQUFJLENBQUM7TUFDbEc7O0FBRUQsWUFBTyw2QkFBSyxTQUFTLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBRSxhQUFjLEdBQU8sQ0FBQztJQUMvRDtFQUNGLENBQUMsQzs7Ozs7O0FDOUNGLGdEIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUHJvZ3Jlc3NcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJSZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUHJvZ3Jlc3NcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJhMjhiOWI0MTY0NjM0OTVkOWQwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9yZWFjdC1wcm9ncmVzcycpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgdmFyIG9iamVjdCA9IHt9O1xuICBPYmplY3Qua2V5cyhhKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkgeyBvYmplY3Rba2V5XSA9IGFba2V5XTsgfSk7XG4gIE9iamVjdC5rZXlzKGIpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7IG9iamVjdFtrZXldID0gYltrZXldOyB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUHJvZ3Jlc3MnLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiAnIzU1OEFCQicsXG4gICAgICBoZWlnaHQ6IDIsXG4gICAgICBwZXJjZW50OiAwLFxuICAgICAgc3BlZWQ6IC40LFxuICAgICAgc3R5bGU6IHt9XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvZ3Jlc3NTdHlsZSA9IG1lcmdlKHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6IGAke3RoaXMucHJvcHMucGVyY2VudH0lYCxcbiAgICAgIG1heFdpZHRoOiAnMTAwJSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5wcm9wcy5oZWlnaHR9cHhgLFxuICAgICAgYm94U2hhZG93OiAnMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjQpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzAgMXB4IDFweCAwJyxcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246IGAke3RoaXMucHJvcHMuc3BlZWR9cyB3aWR0aCwgJHt0aGlzLnByb3BzLnNwZWVkfXMgYmFja2dyb3VuZC1jb2xvcmAsXG4gICAgICB0cmFuc2l0aW9uOiBgJHt0aGlzLnByb3BzLnNwZWVkfXMgd2lkdGgsICR7dGhpcy5wcm9wcy5zcGVlZH1zIGJhY2tncm91bmQtY29sb3JgXG4gICAgfSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb2xvciAmJiB0aGlzLnByb3BzLmNvbG9yICE9PSAncmFpbmJvdycpIHtcbiAgICAgIHByb2dyZXNzU3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5wcm9wcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5wcm9wcy5jb2xvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZ3Jlc3NTdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnByb3BzLnN0eWxlLmJhY2tncm91bmRJbWFnZSB8fCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGNkOTY0LCAjNWFjOGZhLCAjMDA3YWZmLCAjMzRhYWRjLCAjNTg1NmQ2LCAjRkYyRDU1KSc7XG4gICAgICBwcm9ncmVzc1N0eWxlLmJhY2tncm91bmRTaXplID0gdGhpcy5wcm9wcy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSB8fCBgMTAwdncgJHt0aGlzLnByb3BzLmhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcycgc3R5bGU9e3Byb2dyZXNzU3R5bGV9PjwvZGl2PjtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9yZWFjdC1wcm9ncmVzcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiIuL2Rpc3QvcmVhY3QtcHJvZ3Jlc3MuanMifQ==