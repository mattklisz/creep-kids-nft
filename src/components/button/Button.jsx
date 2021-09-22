import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({ text }) => {
  return (
    <div className="button-container">
      <div className="button-text">
        {`${text}`}
      </div>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
