# react-progress

Youtube style progress bar for React

![](examples/demo.gif)

## Install

```
npm install react-progress --save
```

## Usage

```javascript
import React, { Component } from 'react';
import Progress from 'react-progress';

class View extends Component {
  render() {
    return (
      <div>
        ...
        <Progress percent={30}/>
        ...
      </div>
    );
  }
});
```

### Props

prop      | type   | default | notes
----------|--------|---------|--------
percent   | number | 0       | 0-100
height    | number | 2       | pixels
hideDelay | number | .4      | seconds
speed     | number | .4      | seconds
style     | object | {}      |
color     | string | gradient| linear-gradient(to right, rgb(76, 217, 100), rgb(90, 200, 250), rgb(0, 122, 255), rgb(52, 170, 220), rgb(88, 86, 214), rgb(255, 45, 85))

## License

MIT
