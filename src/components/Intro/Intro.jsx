import React, { useEffect, useRef } from 'react'
import { init } from 'ityped';
import { KeyboardArrowDown } from '@mui/icons-material'
import { common } from '@mui/material/colors'
import './intro.css'
// import '../../responsive.css'

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1600,
      strings: ["de front-end", "de back-end", "da Trybe!"]
    })
   }, []);
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/no_background_me.png" alt="my_profile_pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Boas vindas ao meu portfólio! Eu sou,</h2>
          <h1>Vinicius Leite Dourado Nogueira.</h1>
          <h3>Estudante <span ref={textRef} /></h3>
        </div>
        <a href="#content">
          <KeyboardArrowDown className='arrow' sx={{fontSize: 80, colo: common}} />
        </a>
      </div>
    </div>
  )
}
