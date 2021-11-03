import React from 'react'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'

import './CreepCard.css'

export const CreepCard = ({ name, imagePath, strength, speed, intelligence, rarity }) => {
  return (
    <div className="creep">
      
      <div className="creep-image-attributes">
        <div className={`creep-image${isMobile ? '-mobile' : ''}`}>
          <img src={imagePath} alt="" />
        </div>
        <div>
          <div className="creep-name">{name}</div>
          <div className="copy-inner copy-label">ATTRIBUTES</div>
          <div className="copy-no-margin">{`Strength: ${strength}`}</div>
          <div className="copy-no-margin">{`Speed: ${speed}`}</div>
          <div className="copy-no-margin">{`Intelligence: ${intelligence}`}</div>
          <div className="copy-no-margin">{`Rarity: ${rarity}`}</div>
        </div>
      </div>
    </div>
  )
}

CreepCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  rarity: PropTypes.string.isRequired
}
