import React from 'react';
import './header.css';

export default function Header({Menu, setMenu}) {
  return (
    <div className={ Menu ? "header active" : "header"}>
      <div className="wrapper">
        <div className='left'>
          <a href="#intro" className='logo'>VLDN.</a>
          <span>Portfólio</span>
        </div>
        <div className="right">
          <div className="menu" onClick={() => setMenu(!Menu)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
