import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class FilterIcon extends Component<IDefIcon> {
  static displayName = FilterIcon.name

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
          <path d="M13.8539 1H1.14611C0.66192 1 0.377149 1.54396 0.653028 1.94187L6.1436 9.86095C6.37566 10.1957 6.5 10.5932 6.5 11.0005V18.6C6.5 19.2246 7.33547 19.4335 7.62941 18.8824L8.26471 17.6912C8.41919 17.4015 8.5 17.0783 8.5 16.75V11.0005C8.5 10.5932 8.62434 10.1957 8.85641 9.86095L14.347 1.94187C14.6229 1.54396 14.3381 1 13.8539 1Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
}
