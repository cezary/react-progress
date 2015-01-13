var React = require('react');

module.exports = React.createClass({
  displayName: 'Progress',

  getDefaultProps: function() {
    return {
      color: '#558ABB',
      height: 2,
      percent: 0,
      speed: .4
    };
  },

  render: function () {
    var progressStyle = this.props.style || {
      display: 'inline-block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${this.props.percent}%`,
      maxWidth: '100% !important',
      height: `${this.props.height}px`,
      boxShadow: '1px 1px 1px rgba(0,0,0,0.4)',
      borderRadius: '0 1px 1px 0',
      WebkitTransition: `${this.props.speed}s width, ${this.props.speed}s background-color`,
      transition: `${this.props.speed}s width, ${this.props.speed}s background-color`
    };

    if (this.props.color && this.props.color !== 'rainbow') {
      progressStyle.backgroundColor = this.props.color;
    } else {
      progressStyle.backgroundImage = 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
      progressStyle.backgroundSize = `100vw ${this.props.height}px`;
    }

    return <div className='progress' style={progressStyle}></div>;
  }
});
