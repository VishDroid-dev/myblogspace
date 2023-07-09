import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>5P34R writeups</span>,
  project: {
    link: 'https://github.com/VishDroid-dev',
  },  
  footer: {
    text: 'Made with love by VishDroid-dev 💗',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 5P34R'
    }
  },
}

export default config
