import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { round } from 'lodash'
import {
  Carousel,
  Gallery,
  Menu,
} from '../../components'
import './Home.css'

export const Home = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [mintCount, setMintCount] = useState(1)
  const [isMinting, setIsMinting] = useState(true)
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
            {/* <div className={`${isConnecting ? 'button-disabled ' : 'button-enabled '}${isConnected ? 'connected-button' : 'connect-button'}`} onClick={onConnectHandler}>
              <img src={`${isConnected ? './assets/images/connected_wallet.gif' : './assets/images/connect_wallet.gif'}`} alt="" />
            </div> */}
            <div className={`${isMinting ? 'button-disabled ' : 'button-enabled '}mint-button`} onClick={onMintHandler}>
              <img src={"./assets/images/mint.gif"} alt="" />
            </div>
            <div className="copy coming-soon">
              {'- COMING SOON -'}
            </div>
            {/* <div className="cost-label">
              {`${round(0.0666 * mintCount, 4)} ETH`}
            </div>
            <div className="mint-count-selector">
              <div className={`${mintCount === 1 ? 'button-disabled ' : 'button-enabled '}mint-count-control`} onClick={() => setMintCount(mintCount - 1)}>
                {'<'}
              </div>
              <div className="mint-count">
                {`${mintCount} QTY`}
              </div>
              <div className={`${mintCount === 10 ? 'button-disabled ' : 'button-enabled '}mint-count-control`} onClick={() => setMintCount(mintCount + 1)}>
                {'>'}
              </div>
            </div> */}
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
          {/* <div id="section_how_to" className="section how-to">
            <h2>How To</h2>
              <div className="copy-inner">{'Connect and pay through Metamask or PayPal'}</div>
              <div className="copy-inner">{'Metamask: Install or send ETH to your Metamask wallet (purchasing ETH is easy through Coinbase or PayPal)'}</div>
              <div className="copy-inner">{'Paypal: TBD'}</div>
          </div> */}
          <Carousel />
          <div id="section_status" className="section status">
            <h2>Status</h2>
            <div className="copy-inner">
              {'Smart contract is live on Mainnet! Public minting is still locked, but the team has minted 40 Creep Kids as part of testing. View them on Opensea'}
              <a href="https://opensea.io/collection/creep-kids" target="_blank" rel="noreferrer" className="social-logo">here</a>
            </div>
            <div className="copy-inner">
              {'View the smart contract'}
              <a href="https://github.com/LucasMoskun/creep_kids_contract/blob/main/CreepKidsNFT.sol" target="_blank" rel="noreferrer" className="social-logo">here</a>
            </div>
            <div className="copy-inner">
              {'And contract address: '}
              <span className="copy-small">{'0x586fe06b3682e3ccf013846b4db093b75218526e'}</span>
            </div>
          </div>
          <div id="section_roadmap" className="section roadmap">
            <h2>Roadmap</h2>
            <div className="copy-inner">{'10% Rarity Tools calculation'}</div>
            <div className="copy-inner">{'15% Special giveaway for all Creep Kids collectors'}</div>
            <div className="copy-inner">{'25% Creep Kids merch revealed'}</div>
            <div className="copy-inner">{'66.6% Special character airdropped to Creep Kids collectors'}</div>
            <div className="copy-inner">{'75% Creep Kids game features revealed'}</div>
            <div className="copy-inner">{'100% Gen 2 Roadmap revealed'}</div>
          </div>
          {/* <div id="section_faq" className="section faq">
            <h2>FAQ</h2>
            {'TBD'}
          </div> */}
          <div id="section_about" className="section about">
            <h2>About</h2>
            {'We are a team of people that work across technology, film, and art. Our focus is to create and elevate media beyond traditional formats. World Wide Business Company.'}
            <div className="copy-inner">{'--'}</div>
            <h4>@van_goghs_ear</h4>
            <div className="half-top copy-inner">{'Matt Schoen makes art in Austin, TX and pays the bills in creative and design consulting.'}</div>
            <h4>@LucasMoskun</h4>
            <div className="half-top copy-inner">{'Blockchain dev by night, back end dev @ Marshmallow Laser Feast by day -- London.'}</div>
            <h4>@abazar</h4>
            <div className="half-top copy-inner">{'Abazar Khayami produces content across multiple formats.'}</div>
            <h4>@gravedancer</h4>
            <div className="half-top copy-inner">{'Dean White creates soundtracks for film. He lives and works in New York.'}</div>
            <h4>@BJLevin</h4>
            <div className="half-top copy-inner">{'BJ Levin is a two-time Emmy-winning showrunner and current EVP of Non-Fiction at AGC Studios. Most recently he was showrunner of FX’s breakout hit HIP HOP UNCOVERED and served as senior vice president, development and original programming at NBCU and original showrunner of VICE on HBO.'}</div>
          </div>
          {/* <div id="section_help" className="section help">
            <h2>Help</h2>
            {'TBD'}
          </div> */}
          <div id="section_contact" className="footer">
            <h4>CONTACT US</h4>
            <div className="footer-items">
              <a href="https://discord.gg/cKy3RRfz" target="_blank" rel="noreferrer" className="footer-item">DISCORD</a>
              <span className="footer-item">{' | '}</span>
              <div className="footer-item">admin@creepkids.io</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
