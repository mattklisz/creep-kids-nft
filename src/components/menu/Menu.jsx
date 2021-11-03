import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import './Menu.css'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen)
  }

  return isMobile ? (
    <div className="menu-container-mobile" onClick={openHandler}>
      <div className={`menu-label${isOpen ? '-open' : ''}`}>
        {'MENU'}
      </div>
      {
        isOpen ?
        <div>
          <a href="#section_buy" className="menu-link">BUY</a>
          {/* <a href="#section_how_to" className="menu-link">HOW TO</a> */}
          <a href="#section_roadmap" className="menu-link">ROADMAP</a>
          {/* <a href="#section_faq" className="menu-link">FAQ</a> */}
          <a href="#section_about" className="menu-link">ABOUT</a>
          {/* <a href="#section_help" className="menu-link">HELP</a> */}
          <a href="#section_contact" className="menu-link">CONTACT</a>
        </div> : null
      }
    </div>
  )
  : (
    <div className="menu-container">
      <a href="#section_buy">BUY</a>
      {/* <a href="#section_how_to">HOW TO</a> */}
      <a href="#section_roadmap">ROADMAP</a>
      {/* <a href="#section_faq">FAQ</a> */}
      <a href="#section_about">ABOUT</a>
      {/* <a href="#section_help">HELP</a> */}
      <a href="#section_contact">CONTACT</a>
    </div>
  )
}