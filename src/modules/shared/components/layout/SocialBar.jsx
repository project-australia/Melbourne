import React from 'react'
import SectionCentered from './../grid/SectionCentered'

import './../../style/social.scss'

const SocialBar = (props) => {
  return (
    <SectionCentered class='social-bar'>
      <div className='social-bar-box'>
        <span>Contact: salles@ballard.com</span>
        <span>Social Icons</span>
      </div>
    </SectionCentered>
  )
}

export default SocialBar
