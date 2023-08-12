import React from 'react';
import ME from '../../assets/IMG_5181.png';
import {FaAward} from 'react-icons/fa';
import {PiCertificate} from 'react-icons/pi';
import {SiCodeproject} from 'react-icons/si';
import './About.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='about-me'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years Experience</small>
            </article>

            <article className='about__card'>
              <PiCertificate className='about__icon'/>
              <h5>Certificates</h5>
              <small>React, JavaScript, Node.js mastery</small>
            </article>

            <article className='about__card'>
              <SiCodeproject className='about__icon'/>
              <h5>Projects</h5>
              <small>E-commerce, ToDo, Weather Apps.</small>
            </article>
          </div>
          <p>A Software Engineer with 2+ years of experience as a Frontend Developer, have successfully collaborated with cross-functional teams to develop and deliver high-quality web applications. My expertise lies in creating responsive and engaging user interfaces using modern web technologies such as HTML5, CSS3, Javascript and NodeJS. I am also proficient in front-end frameworks such as ReactJS and have experience working with version control systems like Git.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About