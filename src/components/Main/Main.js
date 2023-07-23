import React from 'react'
import GooglePlay from '../../images/google_play.png'
import AppleStore from '../../images/apple_store.png'
import DownloadButton from './DownloadButton'
import './DownloadButton.css'

const Main = () => {
  return (
    <section className="section hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Your Gateway to Car Enthusiasm</h1>
          <p className="hero-text">Unveiling the Road Ahead: Discover Cars, Explore Features!</p>
          <div className='download-btn-container'>
            <DownloadButton link={'https://play.google.com/store/apps/details?id=com.daimler.ris.mercedesme.ece.android&hl=en_IN&gl=US'} image={GooglePlay} size={200} />
            <DownloadButton link={'https://apps.apple.com/in/app/mercedes-me/id1487652920'} image={AppleStore} size={200} />
          </div>
        </div>
        <div className="hero-banner"></div>
      </div>
    </section>
  )
}

export default Main