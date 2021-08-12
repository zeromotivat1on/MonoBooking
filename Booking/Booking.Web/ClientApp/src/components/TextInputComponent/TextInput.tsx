import React, { Component } from 'react'
import './TextInput.css'

type TextInputType = 'text' | 'date' | 'email' | 'textarea' | 'number' | 'password'

interface TextInputProps {
  inputContainerClasses?: string,
  inputClasses?: string,
  inputName?: string,
  type?: TextInputType,
  placeholder?: string,
  labelText?: string,
  onChange?: (e: any) => void
  required?: boolean
}

export default class TextInput extends Component<TextInputProps> {
  static displayName = TextInput.name

  render () {
    const type = this.props.type ? this.props.type : 'text'
    const determinedInput = type === 'textarea' ?                     
                    <textarea
                      rows={7}
                      className={`def-input def-textarea ${this.props.inputClasses}`} 
                      id={this.props.inputName}
                      name={this.props.inputName}
                      placeholder={this.props.placeholder}
                      
                      onChange={this.props.onChange}
                      required={this.props.required} />
                    :
                    <input
                      className={`def-input ${this.props.inputClasses}`} 
                      type={type}
                      id={this.props.inputName}
                      name={this.props.inputName}
                      placeholder={this.props.placeholder}
                      min={type === 'number' ? 1 : undefined}
                      max={type === 'number' ? 999999 : undefined}
                      
                      onChange={this.props.onChange}
                      required={this.props.required} />

    const label = this.props.labelText ? 
                        <label className="def-label" htmlFor={this.props.inputName}>
                          {this.props.labelText}
                        </label> 
                        :
                        null

    return (
      <div className={`def-input-container ${this.props.inputContainerClasses}`}>
        {label}
        {determinedInput}
      </div>
    )
  }
}
