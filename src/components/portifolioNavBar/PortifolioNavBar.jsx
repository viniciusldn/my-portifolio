import React from 'react'
import './portifolioNavBar.css'

export default function PortifolioNavBar({title, id, active, setSelected}) {
  return (
    <li
    className={active ? 'portfolioNavBar active' : 'portfolioNavBar'}
    onClick={()=>setSelected(id)}
    >
      {title}
    </li>
  )
}
