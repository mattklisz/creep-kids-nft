import React from 'react'
import {
  Button,
  Menu
} from '../../components'
import './Home.css'

export const Home = () => {
  return (
    <div className="home-container">
      <div className="logo">
        <img src={"./assets/images/creep_kids_logo-red.gif"} alt="" height="200" width="440" />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="teaser">
        <img src={"./assets/images/NFT-TEASE-V1.gif"} alt="" height="320" width="320" />
      </div>
      <div id="section_buy" className="section mint">
        <Button text={'mint'} />
      </div>
      <div className="copy">
        {'Creep Kids are immortal souls minted in real time, programmatically on the Ethereum blockchain. There are 1000 unique possibilities, no two are alike. They are NFT\'s that can be traded on Opensea.'}
      </div>
      <div className="gallery">
        Gallery TBD
      </div>
      <div className="copy">
        {'When minted, each Creep Kid is assigned a unique set of RPG attributes and their names are created using GPT-3.'}
      </div>
      <div id="section_how_to" className="section how-to">
        <h2>How To</h2>
          {'Connect and pay through Metamask or PayPal'}
          {'Metamask: Install or send ETH to your Metamask wallet (purchasing ETH is easy through Coinbase or PayPal)'}
          {'Paypal: TBD'}
      </div>
      <div id="section_roadmap" className="section roadmap">
        <h2>Roadmap</h2>
        {'20% Creep Kids t-shirt for all owenrs'}
        {'30% Provenance'}
      </div>
      <div id="section_faq" className="section faq">
        <h2>FAQ</h2>
        {'TBD'}
      </div>
      <div id="section_about" className="section about">
        <h2>About</h2>
        {'TBD'}
      </div>
      <div id="section_help" className="section help">
        <h2>Help</h2>
        {'TBD'}
      </div>
    </div>
  )
}
