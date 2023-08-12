import React from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SRIHARINI</a>

      <div className="footer__socials">
        <a href='https://github.com/harinish986'><BsLinkedin/></a>
        <a href='https://www.linkedin.com/in/sri-harini-frontend-guru/'><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sriharini. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer