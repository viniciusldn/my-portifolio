import React from 'react'
import { useState } from 'react'
import Carousel from '../components/Carousel/Carousel'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import DropMenu from '../components/Menu/DropMenu'
import Midia from '../components/Midia/Midia'
import './portifolio.css'


export default function Portifolio() {
  const [Menu, setMenu] = useState(false)
  return (
    <div className="portfolio">
      <Header Menu={Menu} setMenu={setMenu}/>
      <DropMenu Menu={Menu} setMenu={setMenu}/>
      <div className="sections">
        <Intro />
        <Content />
        <Carousel />
        <Midia />
        <Footer />
      </div>
    </div>
  )
}
