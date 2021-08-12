import React, { Component } from 'react'
import './Button.css'

interface ButtonProps {
	buttonText?: string,
	buttonClasses?: string,
	buttonInnerIcon?: React.ReactElement,
	type?: 'button' | 'reset' | 'submit',
	buttonFunc?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class Button extends Component<ButtonProps> {
	render() {
		return (
			<button 
				className={`def-btn ${this.props.buttonClasses}`}
				type={this.props.type}
				onClick={this.props.buttonFunc}
				onSubmit={this.props.type === 'submit' ? this.props.buttonFunc: undefined}
			>
				{
					this.props.buttonInnerIcon ? 
						this.props.buttonInnerIcon
						:
						<></>
				}
				<span className="def-btn-text">{this.props.buttonText}</span>
			</button>
		)
	}
}