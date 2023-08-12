import React from 'react';
import CTA from './CTA';
import Me from '../../assets/IMG_5071.png';
import Social from './Social';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Sriharini</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA/>
        <Social/>

        <div className='me'>
          <img src={Me} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header