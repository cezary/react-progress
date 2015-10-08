'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

module.exports = React.createClass({
  displayName: 'Progress',

  getDefaultProps: function getDefaultProps() {
    return {
      height: 2,
      percent: 0,
      speed: .4,
      style: {}
    };
  },

  render: function render() {
    var progressStyle = _extends({
      display: 'inline-block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: this.props.percent + '%',
      maxWidth: '100% !important',
      height: this.props.height + 'px',
      boxShadow: '1px 1px 1px rgba(0,0,0,0.4)',
      borderRadius: '0 1px 1px 0',
      WebkitTransition: this.props.speed + 's width, ' + this.props.speed + 's background-color',
      transition: this.props.speed + 's width, ' + this.props.speed + 's background-color'
    }, this.props.style);

    if (this.props.color && this.props.color !== 'rainbow') {
      progressStyle.backgroundColor = this.props.style.backgroundColor || this.props.color;
    } else {
      progressStyle.backgroundImage = this.props.style.backgroundImage || 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
      progressStyle.backgroundSize = this.props.style.backgroundSize || '100vw ' + this.props.height + 'px';
    }

    return React.createElement('div', { className: 'progress', style: progressStyle });
  }
});

