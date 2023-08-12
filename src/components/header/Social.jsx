import React from 'react';
import {AiOutlineLinkedin,AiOutlineGithub} from 'react-icons/ai';

const Social = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sri-harini-frontend-guru/' target='_blank' rel="noopener noreferrer"><AiOutlineLinkedin/></a>
        <a href='https://github.com/harinish986' target='_blank' rel="noopener noreferrer"><AiOutlineGithub/></a>
    </div>
  )
}

export default Social