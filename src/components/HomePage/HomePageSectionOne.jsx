import { Scroll,useScroll } from "@react-three/drei";
import { PcsSectionComponent } from "./HomePageSectionComponents";
import './HomePage.scss';
import { HomePageSectionTwo } from "./HomePageSectionTwo";
import { HomePageSectionThree } from "./HomePageSectionThree";
import { HomePageSectionFour } from "./HomePageSectionFour";
import React, { useState , createContext  } from 'react';
import logo from "../../assets/chevron-down.svg";


export const HomePageSectionOne = ({ updateValue }) => {
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    let newValue = 1.7;
    updateValue(newValue);
    setButtonVisible(false);
  

};

  return (
    <Scroll html >
        <div className="first-container">
        <div className="welcome-text">
          <h1>Build Your</h1>
          <h1 id="welcome-text-custom">Custom</h1>
          <h1>Drone</h1>
        </div>  
        <div className="container-discription">
          <div className="discription-text">
            <h4>Make your own Drone with Us !!</h4>
          </div>
        </div>
        
        <div className="button-main">
          <a href="/CustomPage">
            <button className="make-your-own-btn">
              <p>Make Your Own</p>
            </button>
          </a>
          <button className="our-product-btn">
            <p>Our Product</p>        
          </button>
        </div>
        <PcsSectionComponent/>
        

        {/* ลูกศร */}
        {buttonVisible && (
        <button className="sent-data" onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        </button>
      )}
        
        <HomePageSectionTwo/>
        <hr className="underline"/>
        <HomePageSectionThree/>
        <hr className="underline" id="underline-two" />
        <HomePageSectionFour/>
      </div>
    </Scroll>
  );
};

