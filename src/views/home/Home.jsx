import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import {
  CreepCard,
  Gallery,
  Menu,
} from '../../components'
import './Home.css'

export const Home = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [mintCount, setMintCount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [mintSuccess, setMintSuccess] = useState(false)

  const onConnectHandler = () => {
    console.log('hit connect')
    setIsConnecting(true)

    // setIsConnected true/false depending on api response, then setIsConnecting(false)
  }

  const onMintHandler = () => {
    console.log('hit mint')
    setIsMinting(true)

    // setMintSuccess true/false depending on api response, then setIsMinting(false)
  }

  return (
    <div>
      <div className={`header-${isMobile ? 'mobile' : 'desktop'}`}>
        <a href="https://www.instagram.com/creepkids_nft" target="_blank" rel="noreferrer" className="social-logo">INSTAGRAM</a>
        <a href="https://discord.gg/cKy3RRfz" target="_blank" rel="noreferrer" className="social-logo">DISCORD</a>
        <a href="https://twitter.com/creepkids" target="_blank" rel="noreferrer" className="social-logo">TWITTER</a>
      </div>
      <div className={`${isMobile ? '' : 'grid-container'}`}>
        <div className="home-container">
          <div className="logo">
            <img src={"./assets/images/creep_kids_logo-red.gif"} alt="" />
          </div>
          <div className="menu">
            <Menu />
          </div>
          <div className="teaser">
            <img src={"./assets/images/nft_teaser.gif"} alt="" />
          </div>
          <div id="section_buy" className="section mint">
            <div className={`${isConnecting ? 'button-disabled ' : 'button-enabled '}${isConnected ? 'connected-button' : 'connect-button'}`} onClick={onConnectHandler}>
              <img src={`${isConnected ? './assets/images/connected_wallet.gif' : './assets/images/connect_wallet.gif'}`} alt="" />
            </div>
            <div className={`${isMinting ? 'button-disabled ' : 'button-enabled '}mint-button`} onClick={onMintHandler}>
              <img src={"./assets/images/mint.gif"} alt="" />
            </div>
            <div className="mint-count-selector">
              <div className={`${mintCount === 1 ? 'button-disabled ' : 'button-enabled '}mint-count-control`} onClick={() => setMintCount(mintCount - 1)}>
                {'<'}
              </div>
              <div className="mint-count">
                {mintCount}
              </div>
              <div className={`${mintCount === 10 ? 'button-disabled ' : 'button-enabled '}mint-count-control`} onClick={() => setMintCount(mintCount + 1)}>
                {'>'}
              </div>
            </div>
          </div>
          <div className="copy">
            {'Creep Kids are immortal souls minted in real time, programmatically on the Ethereum blockchain. There are 1000 unique possibilities, no two are alike. They are NFTs that can be traded on Opensea.'}
          </div>
          <div className="gallery">
            <Gallery />
          </div>
          <div className="copy">
            {'When minted, each Creep Kid is assigned a unique set of RPG attributes.'}
          </div>
          <CreepCard
            name={'SCORNED DEMON'}
            imagePath={'./assets/images/example-creep.gif'}
            soulIndex={13}
            strength={240}
            speed={666}
            intelligence={120}
            rarity={'ELITE'}
          />
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
        <div className="footer"></div>
        </div>
      </div>
    </div>
  )
}
