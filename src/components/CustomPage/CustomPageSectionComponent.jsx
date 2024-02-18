import './CustomPage.scss';
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const SliderComponent = () => {
    const sliderRef = useRef(null); 

    const cardTitles = ["Model", "Colors", "Free","Free"];
    const comsTitles = [<BoxComponent numOfBoxes={1}/> , <BoxComponent numOfBoxes={2}/> ,<BoxComponent numOfBoxes={3}/> ,<BoxComponent numOfBoxes={4}/>]
    
    const settings = {
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false, 
      arrows: false,

    };

    const goToSlide = (index) => {
      sliderRef.current.slickGoTo(index);
    };
    const slidePrev = () => {
      sliderRef.current.slickPrev();
    };
  
    const slideNext = () => {
      sliderRef.current.slickNext();
    };
    return (
    <>
      <div className='all-slider-container'>
        <div className="arrow-container">
        </div>
        <Slider ref={sliderRef} {...settings}>
          {cardTitles.map((title, index) => (

            <div key={index} className="full-page-card">
              <div className="title-card-slider">
                <h1>{title}</h1>
                <div className='Arrow-all'>
                <button onClick={slidePrev} className="arrow-button" id='arrow-btn-left'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                      </svg>
                </button>
                <button onClick={slideNext} className="arrow-button" id='arrow-btn-right'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg>
                </button>
                </div>
              </div>
              <nav className="navbar">
                <ul className='Slider-container'>
                  {cardTitles.map((navTitle, navIndex) => (
                    <li onClick={() => goToSlide(navIndex)} key={navIndex} className={index === navIndex ? 'active' : ''}>
                      <a id='name-title-click' href="#">
                        {navTitle}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="spaceInside" >
                {comsTitles[index]}

                  
                </div>
              </nav>
            </div>
          ))}
        </Slider>
        <div className="arrow-container">

        </div>
      </div>

    </>
    )
}
  
const BoxComponent = ({ numOfBoxes }) => {
  const boxesInColumn1 = Math.ceil(numOfBoxes / 2);
  const boxesInColumn2 = numOfBoxes - boxesInColumn1;

  const boxStyle = {
    width: '10vw',
    height: '19.5vh',
    margin: '1vw', 
    backgroundColor: '#FFFFFF', 
    borderRadius: '1.2vw',
    boxShadow: '0 4px 9px rgba(0, 0, 0, 0.6)', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1vh', // Adjust as needed
  };

  const createBoxes = (count) => {
    const boxes = [];
    for (let i = 0; i < count; i++) {
      boxes.push(
        <div key={i} style={boxStyle}>
          <div style={{ marginTop: '-1vh' ,width: '10vw', height: '75%', backgroundColor: 'lightblue', borderRadius: '1.2vw' }}>
            {/* Inner Box */}
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.8em' }}>
            {/* Description */}
            Line 1 Description
            <br />
            Line 2 Description
          </div>
        </div>
      );
    }
    return boxes;
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '24vw' }}>
        {createBoxes(boxesInColumn1)}
      </div>
      <div style={{ width: '24vw' }}>
        {createBoxes(boxesInColumn2)}
      </div>
    </div>
  );
};
