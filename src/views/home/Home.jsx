import React from 'react'
import { isMobile } from 'react-device-detect'
import {
  Button,
  // DiscordLogo,
  Gallery,
  Menu,
  // TwitterLogo
} from '../../components'
import './Home.css'

export const Home = () => {
  const getContainerClass = () => isMobile ? '' : 'grid-container';

  return (
    <div className={`${getContainerClass()}`}>
      <div className="home-container">
        <div className="logo">
          <img src={"./assets/images/creep_kids_logo-red.gif"} alt="" />
        </div>
        <div className="menu">
          <Menu />
        </div>
        {/* <div>
          <div className="social-logo">
            <DiscordLogo />
          </div>
          <div className="social-logo">
            <TwitterLogo />
          </div>
        </div> */}
        <div className="teaser">
          <img src={"./assets/images/NFT-TEASE-V1.gif"} alt="" />
        </div>
        <div id="section_buy" className="section mint">
          <Button text={'mint'} />
        </div>
        <div className="copy">
          {'Creep Kids are immortal souls minted in real time, programmatically on the Ethereum blockchain. There are 1000 unique possibilities, no two are alike. They are NFTs that can be traded on Opensea.'}
        </div>
        <div className="gallery">
          <Gallery />
        </div>
        <div className="copy">
          {'When minted, each Creep Kid is assigned a unique set of RPG attributes and their names are created using GPT-3.'}
        </div>
        <div className="example-creep">
          <div className="example-creep-name">
            {'SCORNED DEMON'}
          </div>
          <div className="example-creep-image">
            <img src="./assets/images/example-creep.gif" alt="" />
          </div>
          <div>{'SOUL INDEX #13'}</div>
          <div className="copy-inner copy-label">ATTRIBUTES</div>
          <div className="copy-no-margin">STRENGTH: 240</div>
          <div className="copy-no-margin">SPEED: 666</div>
          <div className="copy-no-margin">INTELLIGENCE: 120</div>
          <div className="copy-no-margin">RARITY: ELITE</div>
        </div>
        <div id="section_how_to" className="section how-to">
          <h2>How To</h2>
            <div className="copy-inner">{'Connect and pay through Metamask or PayPal'}</div>
            <div className="copy-inner">{'Metamask: Install or send ETH to your Metamask wallet (purchasing ETH is easy through Coinbase or PayPal)'}</div>
            <div className="copy-inner">{'Paypal: TBD'}</div>
        </div>
        <div id="section_roadmap" className="section roadmap">
          <h2>Roadmap</h2>
          <div className="copy-inner">{'20% Creep Kids t-shirt for all owenrs'}</div>
          <div className="copy-inner">{'30% Provenance'}</div>
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
    </div>
  )
}
