import React from 'react';
import './dropmenu.css';

// menu esta atras o carousel de projetos
export default function DropMenu({Menu, setMenu}) {
  return (
    <div className={Menu ? 'dropmenu active' : 'dropmenu'}>
      <ul onClick={() => setMenu(!Menu)}>
      <li>
          <a href="#intro">
            Inicio
          </a>
        </li>
        <li>
          <a href="#content">
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#carousel">
            Projetos
          </a>
        </li>
        <li>
          <a href="#midia">
            Mídias
          </a>
        </li>
        <li>
          <a href="#footer">
            Contato
          </a>
        </li>
      </ul>
    </div>
  )
}
