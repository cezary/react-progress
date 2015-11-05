var React = require('react');

const defaultProps = {
  height: 2,
  percent: 0,
  speed: .4,
  style: {}
};

export default (props) => {
  props = {
    ...defaultProps,
    ...props
  };

  let progressStyle = {
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
    progressStyle.backgroundColor = props.style.backgroundColor || props.color;
  } else {
    progressStyle.backgroundImage = props.style.backgroundImage || 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
    progressStyle.backgroundSize = props.style.backgroundSize || `100vw ${props.height}px`;
  }

  return <div className='progress' style={progressStyle}></div>;
};
