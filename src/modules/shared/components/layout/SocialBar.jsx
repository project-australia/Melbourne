import React from 'react'
import SectionCentered from './../grid/SectionCentered'

import './../../style/social.css'

const SocialBar = (props) => {
  return (
    <SectionCentered class='social-bar'>
      <div className='social-bar-box'>
        <span>contact: salles@ballard.com</span>
        <span>Social Icons</span>
      </div>
    </SectionCentered>
  )
}

export default SocialBar
