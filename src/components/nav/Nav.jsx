import React from 'react';
import {GoHome} from 'react-icons/go';
import {BiUser,BiMessageDetail} from 'react-icons/bi';
import {GiPencilBrush} from 'react-icons/gi';
import {SiCodeproject} from 'react-icons/si';
import './Nav.css';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><GoHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><BiUser/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active':''}><GiPencilBrush/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active':''}><SiCodeproject/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav