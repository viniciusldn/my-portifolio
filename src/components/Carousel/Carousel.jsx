/** @format */

import React, { useState, useEffect } from 'react';
import PortifolioNavBar from '../portifolioNavBar/PortifolioNavBar';
import './carousel.css';
import { dataFund, dataFront, dataBack, dataCs } from '../../data/data-portfolio';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel() {
  const [Selected, setSelected] = useState('fund');
  const [Data, setData] = useState([]);
  const navBarItems = [
    {
      id: 'fund',
      title: 'Fundamentos',
    },
    {
      id: 'front',
      title: 'Front-end',
    },
    {
      id: 'back',
      title: 'Back-end',
    },
    {
      id: 'cs',
      title: 'Computer Science',
    },
  ];

  useEffect(() => {
    switch (Selected) {
      case 'fund':
        setData(dataFund);
        break;
      case 'front':
        setData(dataFront);
        break;
      case 'back':
        setData(dataBack);
        break;
      case 'cs':
        setData(dataCs);
        break;
      default:
        setData(dataFund);
        break;
    }
  }, [Selected]);

  return (
    <div className='carousel' id='carousel'>
      <h1>Projetos</h1>
      <ul>
        {navBarItems.map(({ title, id }) => (
          <PortifolioNavBar
            title={title}
            id={id}
            active={Selected === id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        slidesPerGroup={4}
        autoHeight={true}
        watchOverflow={true}
        slidesPerGroupAuto={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='container'
      >
        <div className='cwrapper'>
          {Data.map(
            (project, index) =>
              project.status && (
                <SwiperSlide key={index}>
                  <div className='item' id={project.id} key={index}>
                    <img
                      className='thumbnail'
                      src={require('../../assets/projectimg.webp')}
                      alt={project.description}
                    />
                    <h3><a /* href={project.url} */>{project.title}</a></h3>
                    <h5>{project.description}</h5>
                    <div className='skills_wrapper'>
                      {project.skills.map((s) => (
                        <img className='shield' src={s.shield} alt={s.id} />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              )
          )}
        </div>
      </Swiper>
    </div>
  );
}
