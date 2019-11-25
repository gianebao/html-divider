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
      </div>
    )
  }
}
