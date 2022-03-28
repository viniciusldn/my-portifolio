/** @format */

import React from 'react';
import './midia.css';
import facebook from '../../assets/logos-bubble/icons8-facebook-500.svg';
import linkedin from '../../assets/logos-bubble/icons8-linkedin-500.svg';
import github from '../../assets/logos-bubble/icons8-github-500.svg';
import instagram from '../../assets/logos-bubble/icons8-instagram-500.svg';

export default function Midia() {
  return (
    <div className='midia' id='midia'>
      <h1>Mídias Sociais</h1>
      <div className='midia-container'>
        <div className='midia-wrapper'>
          <div className='margin'>
          <a href='https://www.facebook.com/viniciusldn'>
            <img src={facebook} alt='Facebook' className='midia' />
          </a>
          </div>
          <div className='margin'>
          <a href='https://www.linkedin.com/in/viniciusldnogueira/'>
            <img src={linkedin} alt='Linkedin' className='midia' />
          </a>
          </div>
          <div className='margin'>
          <a href='https://github.com/viniciusldn'>
            <img src={github} alt='GitHub' className='midia' />
          </a>
          </div>
          <div className='margin'>
          <a href='https://www.instagram.com/viniciusldn/'>
            <img src={instagram} alt='Instagram' className='midia' />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
