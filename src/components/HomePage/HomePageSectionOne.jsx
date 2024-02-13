import { Scroll } from "@react-three/drei";
import { PcsSectionComponent } from "./HomePageSectionComponents";
import './HomePage.scss';
import { HomePageSectionTwo } from "./HomePageSectionTwo";
import { HomePageSectionThree } from "./HomePageSectionThree";
import { HomePageSectionFour } from "./HomePageSectionFour";
import React from 'react'

export const HomePageSectionOne = () => {

  return (
    
    <Scroll html>
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
          <button className="make-your-own-btn">
            <p>Make Your Own</p>
          </button>
          <button className="our-product-btn">
            <p>Our Product</p>        
          </button>
        </div>
        <PcsSectionComponent/>
        
        {/* ลูกศร */}

        <HomePageSectionTwo/>
        <hr className="underline"/>
        <HomePageSectionThree/>
        <hr className="underline" id="underline-two" />
        <HomePageSectionFour/>
      </div>


      
    </Scroll>
  );
};

