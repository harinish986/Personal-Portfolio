import React from 'react';
import {AiOutlineHtml5} from 'react-icons/ai';
import {FaCss3,FaReact,FaBootstrap,FaNodeJs} from 'react-icons/fa';
import {DiJavascript} from 'react-icons/di';
import {SiTailwindcss,SiRedux,SiTypescript,SiAmazonapigateway,SiExpress} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {BsGit} from 'react-icons/bs';
import './Skills.css';

const Service = () => {
  return (
    <section id='skills'>
      <h5>My Skillset for Transformative Creations</h5>
      <h2>Expertise with Impactful Years</h2>

      <div className='container experience__container'>
       
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3 className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>TailwindCss</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiRedux className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsGit className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAmazonapigateway className='experience__details-icon'/>
              <div>
                <h4>RestAPI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <div>
                <h4>ExpressJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service