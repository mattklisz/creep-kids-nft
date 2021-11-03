import React from 'react'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'

import './CreepCard.css'

export const CreepCard = ({ name, imagePath, attributes }) => {
  const {
    strength,
    intelligence,
    agility,
    luck,
    magic,
    health,
    cursed
  } = attributes;

  return (
    <div className="creep">
      <div className="creep-image-attributes">
        <div className={`creep-image${isMobile ? '-mobile' : ''}`}>
          <img src={imagePath} alt=""/>
        </div>
        <div>
          <div className="creep-name">{name}</div>
          <div className="copy-no-margin">{`Strength: ${strength}`}</div>
          <div className="copy-no-margin">{`Intelligence: ${intelligence}`}</div>
          <div className="copy-no-margin">{`Agility: ${agility}`}</div>
          <div className="copy-no-margin">{`Luck: ${luck}`}</div>
          <div className="copy-no-margin">{`Magic: ${magic}`}</div>
          <div className="copy-no-margin">{`Health: ${health}`}</div>
          <div className="copy-no-margin">{`Cursed: ${cursed}`}</div>
        </div>
      </div>
    </div>
  )
}

CreepCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    strength: PropTypes.number,
    intelligence: PropTypes.number,
    agility: PropTypes.number,
    luck: PropTypes.number,
    magic: PropTypes.number,
    health: PropTypes.number,
    cursed: PropTypes.number
  }).isRequired
}
