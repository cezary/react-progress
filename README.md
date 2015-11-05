# react-progress

Youtube style slim progress bar for React

![](examples/demo.gif)

## Installation

```
npm install react-progress
```

## Usage

```javascript
var React = require('react');
var Progress = require('react-progress');

var Component = React.createClass({
  render: function() {
    return (
      <Progress percent={30}/>
    );
  }
});
```

### Props

* height (2), pixel height of progress bar
* percent (0), decimal value that controls width of progress bar
* speed (.4), length of timei n seconds for transitions
* style, an object to apply additional or override any styles

## License

MIT
