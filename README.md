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
classname | string | ''      |
color     | string | rainbow | keyword, hexadecimal, rgb, or hsla
percent   | number | 0       | 0-100
height    | number | 2       | pixels
hideDelay | number | .4      | seconds
speed     | number | .4      | seconds
style     | object | {}      |

## License

MIT
