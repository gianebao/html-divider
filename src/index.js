import React, { Component, Fragment } from 'react'
import styles from './styles.css'

export default class Divider extends Component {
  render() {
    const {
      className,
      color,
      value,
    } = this.props
    
    var classNames = styles.divider + (className ? ' ' + className: '')
    var tail = value ?
        <Fragment>
          <span style={{ color: color }}>{ value }</span>
          <div style={{ borderBottomColor: color }}/>
        </Fragment>
        : ''

    return (
      <div className={ classNames }>
        <div style={{ borderBottomColor: color }}/>
        { tail }
      </div>
    )
  }
}