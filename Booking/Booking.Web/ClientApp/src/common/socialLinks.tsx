import React from 'react'

import ISocialLink from './interfaces/ISocialLink'

import GithubIcon     from '../components/IconComponents/SocialIconComponents/GithubIconComponent'
import FacebookIcon   from '../components/IconComponents/SocialIconComponents/FacebookIconComponent'
import TwitterIcon    from '../components/IconComponents/SocialIconComponents/TwitterIconComponent'
import YoutubeIcon    from '../components/IconComponents/SocialIconComponents/YoutubeIconComponent'
import InstagramIcon  from '../components/IconComponents/SocialIconComponents/InstagramIconComponent'

export const socialLinks:Array<ISocialLink> = [
  {
    name: "Github",
    url: "https://github.com",
    icon: <GithubIcon />
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FacebookIcon />
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <TwitterIcon />
  },
  {
    name: "Youtube",
    url: "https://youtube.com",
    icon: <YoutubeIcon />
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <InstagramIcon />
  }
]