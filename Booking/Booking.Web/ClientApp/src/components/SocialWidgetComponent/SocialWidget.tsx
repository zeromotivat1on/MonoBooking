import React, { Component } from 'react'
import ISocialLink from '../../common/interfaces/ISocialLink'

interface SocialWidgetProps {
  socialLinks: Array<ISocialLink>
}

export default class SocialWidget extends Component<SocialWidgetProps> {
  static displayName = SocialWidget.name

  render () {
    return (
      <div className="social-links">
      {this.props.socialLinks.map(socialLink => {
        return (
          <a
            key={socialLink.name}
            href={socialLink.url}
            rel="noopener noreferrer"
            target="_blank"
            className="social-link"
            title={socialLink.name}
          >
            {socialLink.icon}
          </a>
        )
      })}
    </div>
    )
  }
}
