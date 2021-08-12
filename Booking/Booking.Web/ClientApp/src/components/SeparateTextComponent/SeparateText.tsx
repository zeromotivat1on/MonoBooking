import React, { Component } from 'react'
import './SeparateText.css'

interface SeparateTextProps {
	text?: string
}

export default class SeparateText extends Component<SeparateTextProps> {
	render() {
			return (
        <div className="separate-text-box">
          <span className="separate-text">{this.props.text}</span>
        </div>
			)
	}
}