import React from 'react';
import IMG1 from '../../assets/p1.jpeg';
import IMG2 from '../../assets/p2.png';
import IMG3 from '../../assets/p3.jpeg';
import IMG4 from '../../assets/p4.webp';
import './Project.css';

const Project = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Weather App',
      github: 'https://github.com/harinish986/weather-app',
      demo: 'https://weather-app-0228.netlify.app/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'To-Do App',
      github: 'https://github.com/harinish986/Todo-App',
      demo: 'https://todo-app-harinisri0228.netlify.app/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Credit Card Service Landing Page',
      github: 'https://github.com/harinish986/Banking',
      demo: 'https://paywave-0228.netlify.app/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Crypto Currency Tracker',
      github: 'https://github.com/harinish986/Crypto-Price-Tracker',
      demo: 'https://crypto-price-tracker-0228.netlify.app/'
    }

  ]

  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className='container project__container'>
        {
          data.map((project) => {
            return (
              <article key={project.id} className='project__item'>
                <div className='project__item-img'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className='project__item-cta'>
                  <a href={project.github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                  <a href={project.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Project;
