import React from 'react';

const defaultProps = {
  height: 2,
  hideDelay: .4,
  percent: 0,
  speed: .4,
  style: {}
};

export default (props) => {
  props = {
    ...defaultProps,
    ...props
  };

  let containerStyle = {
    opacity: props.percent < 100 ? 1 : 0,
    WebkitTransition: `${props.speed}s opacity`,
    transition: `${props.speed}s opacity`,
    WebkitTransitionDelay: `${props.percent < 100 ? 0 : props.hideDelay}s`,
    transitionDelay: `${props.percent < 100 ? 0 : props.hideDelay}s`
  };

  let barStyle = {
    display: 'inline-block',
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${props.percent}%`,
    maxWidth: '100% !important',
    height: `${props.height}px`,
    boxShadow: '1px 1px 1px rgba(0,0,0,0.4)',
    borderRadius: '0 1px 1px 0',
    WebkitTransition: `${props.speed}s width, ${props.speed}s background-color`,
    transition: `${props.speed}s width, ${props.speed}s background-color`,
    ...props.style
  };

  if (props.color && props.color !== 'rainbow') {
    barStyle.backgroundColor = props.style.backgroundColor || props.color;
  } else {
    barStyle.backgroundImage = props.style.backgroundImage || 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
    barStyle.backgroundSize = props.style.backgroundSize || `100vw ${props.height}px`;
  }

  return (
    <div className='progress' style={containerStyle}>
      <div className='progress__bar' style={barStyle}></div>
    </div>
  );
};
