import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class CatalogIcon extends Component<IDefIcon> {
  static displayName = CatalogIcon.name

  render () {
    const fill = this.props.fill ? 
                      `${this.props.fill}`
                      :
                      `var(--clr-def-white)`
    return (
      <svg
        className={`${this.props.classes}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 20" >
          <rect x="0.5" y="0.5" width="14" height="19" rx="1.5" stroke={fill}/>
          <line x1="3.5" y1="3.5" x2="11.5" y2="3.5" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="5.5" x2="11.5" y2="5.5" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="8.5" x2="11.5" y2="8.5" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="16.5" x2="11.5" y2="16.5" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="14.5" x2="11.5" y2="14.5" stroke={fill} strokeLinecap="round"/>
      </svg>
    )
  }
}
