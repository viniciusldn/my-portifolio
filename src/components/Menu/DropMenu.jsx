import React from 'react';
import './dropmenu.css';

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
          <a href="#testmonial">
            Curiosidades
          </a>
        </li>
        <li>
          <a href="#footer">
            Contatos
          </a>
        </li>
      </ul>
    </div>
  )
}
