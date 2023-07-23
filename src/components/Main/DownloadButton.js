import React from 'react'
import './DownloadButton.css'

const DownloadButton = ({link, image, size}) => {
  return (
    <button className='download-btn'>
        <a href={link}>
            <img src={image} alt='Google Play Button' width={size} />
        </a>
    </button>
  )
}

export default DownloadButton