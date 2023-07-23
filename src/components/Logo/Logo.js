import React from 'react'
import LogoImage from '../../images/logo.png'

const Logo = () => {
  return (
    <div>
        <img className='car-logo' src={LogoImage} alt="logo" width={200} />
    </div>
  )
}

export default Logo