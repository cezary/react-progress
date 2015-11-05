'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var defaultProps = {
  height: 2,
  percent: 0,
  speed: .4,
  style: {}
};

exports['default'] = function (props) {
  props = _extends({}, defaultProps, props);

  var progressStyle = _extends({
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

  if (props.color && props.color !== 'rainbow') {
    progressStyle.backgroundColor = props.style.backgroundColor || props.color;
  } else {
    progressStyle.backgroundImage = props.style.backgroundImage || 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
    progressStyle.backgroundSize = props.style.backgroundSize || '100vw ' + props.height + 'px';
  }

  return React.createElement('div', { className: 'progress', style: progressStyle });
};

module.exports = exports['default'];

