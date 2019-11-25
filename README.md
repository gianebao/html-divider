# html-divider

> creates an hr-like divider with the text in the middle

[![NPM](https://img.shields.io/npm/v/html-divider.svg)](https://www.npmjs.com/package/html-divider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save html-divider
```

## Usage

```jsx
import React, { Component } from 'react'

import Divider from 'html-divider'

export default class App extends Component {
  render () {
    return (
      <div>
        <p>Section 1</p>
        <Divider/>
        <p>Section 2</p>
        <Divider color="#f00" value="or" />
        <p>Section 3</p>
      </div>
    )
  }
}
```

## License

MIT © [gianebao](https://github.com/gianebao)
