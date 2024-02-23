import './CustomPage.scss';
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {dataset_model , cardTitles} from './DatasetModel'
import {useCustomization } from '../../contexts/Customization';
import { chairColors } from './DatasetModel';
import { FullPalateColor } from './CustomPagePalate';

export const SliderComponent = () => {
    const sliderRef = useRef(null); 
    const [isSliderOpen, setIsSliderOpen] = useState(true);
    const {setIsVisible,isVisible} = useCustomization(); 

   
    const toggleSlider = () => {
      setIsSliderOpen(!isSliderOpen);
    };
    const getToggleIcon = () => {
      return isSliderOpen ? (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </span> 
      ) : (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
        </span> 
      );
    };

    
    const comsTitles  = dataset_model.map((data, index) => (
      <BoxComponent
        key={index}
        numOfBoxes={data.numOfBoxes}
        imageProps={data.imageProps}
        namesProp={data.namesProp}
        pricesProp={data.pricesProp}
        FrameName = {data.FrameName}
        WingName = {data.wingName}
        slideIndex={index}
      />
    ));
  
    const settings = {
      infinite: true,
      speed: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false, 
      arrows: false,
    };

    const goToSlide = (index) => {
      sliderRef.current.slickGoTo(index);
      setIsVisible(false)
    };
    const slidePrev = () => {
      sliderRef.current.slickPrev();
      setIsVisible(false)
    };
  
    const slideNext = () => {
      sliderRef.current.slickNext();
      setIsVisible(false)

    };
    
    return (
    <>
        <div className="slide-top">
          <div className="box-a-slide">
          <div className={`all-slider-container ${isSliderOpen ? 'open' : 'closed'}`}>
            
            <button onClick={toggleSlider} className="toggle-button">
              {getToggleIcon()}
            </button>
          </div>
          </div>

          <div className="box-b-slide">
            <div className={`all-slider-container ${isSliderOpen ? 'open' : 'closed'}`}>
              <div className="slider-content">
                <div className="arrow-container">
                </div>
                <Slider ref={sliderRef} {...settings}>
                  {cardTitles.map((title, index) => (

                    <div key={index} className="full-page-card">
                      <div className="title-card-slider">
                        <h1>{title}</h1>
                        <div className='Arrow-all'>
                        <button onClick={() => {slidePrev();}} className="arrow-button" id='arrow-btn-left'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                              </svg>
                        </button>
                        <button onClick={() => {slideNext();}} className="arrow-button" id='arrow-btn-right'>
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
                        {isVisible && <FullPalateColor />}                        
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
              </div>
          </div>
        </div>
          

    </>
    )
}
  
const BoxComponent = ({ numOfBoxes , imageProps, namesProp, pricesProp , slideIndex ,FrameName ,WingName}) => {
  
  const boxesInColumn1 = (Math.ceil(numOfBoxes / 2));
  const boxesInColumn2 = (numOfBoxes - boxesInColumn1);

  const { setObjectName , setKeynumber  , setSlideNumber , meterial , setMeterial , legs , setLegs ,chairColor ,
    setChairColor,cushionColor , setCushionColor , isVisible, setIsVisible} = useCustomization(); 
  
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  
  const boxStyle = {
    width: '10.7vw',
    height: '22.3vh',
    margin: '0.4vw', 
    backgroundColor: '#FFFFFF', 
    marginBottom: '2vh', 
    marginTop : '2vh',
    borderRadius: '1.2vw',
    boxShadow: '0 4px 9px rgba(0, 0, 0, 0.6)', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1vh'
  };
  
  const chairColorsArray = chairColors.map(chair => chair.color);

  const createBox = (key,slideIndex) => (
    
    <div key={key} style={boxStyle} className='BoxComponent'>
      <div  className={`item ${meterial === "" ? "item--active" : ""} 
                      ${legs === "" ? "item--active" : ""} `}
      
      onClick={() => {
        handleClick() 
        setKeynumber(key)
        setSlideNumber(slideIndex)

        if (slideIndex === 0) {
          setMeterial(FrameName[key]);
          setObjectName(FrameName[key])
        }
        if (slideIndex === 1) {
          setLegs(WingName[key]);
          setObjectName(WingName[key])
        }
        if(slideIndex === 2){
          setChairColor(chairColorsArray[key])
          console.log(chairColorsArray[key])
        }

      }}
      
      style={{ boxShadow: '0px 4px rgba(0, 0, 0, 0.2)', marginTop: '-1vh', width: '10.7vw', height: '78%', backgroundColor: '#E2E3E3', borderRadius: '1.2vw' }}>

        
        <div className="InnerBox" >
          <img src={imageProps[key]} alt="" />
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: '0.8em' }}>
        <div className="Description-Boxes">
          <h4>{namesProp[key]}</h4>

          <div className="description-under">
            <p>{pricesProp[key]}</p>
            <p className="description-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
            </svg>
            </p>
          </div>
        </div>
      </div>
    

    </div>
    
  );
  
  const createBoxes = (count, start) => Array.from({ length: count }, (_, index) => createBox(start + index ,slideIndex ));

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '24vw' }}>{createBoxes(boxesInColumn1, 0)}</div>
      <div style={{ width: '24vw' }}>{createBoxes(boxesInColumn2, boxesInColumn1)}</div>
    </div>
  );
};
