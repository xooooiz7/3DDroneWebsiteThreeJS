// SliderInterfaceComponent

import './CustomPage.scss';
import React, { useEffect } from 'react';
import { BoxProgressInside } from './CustomPageMenu';
import './CustomPage.scss';

export const MenuTopicComponent = () => {
  
    return (
      <>
        <div className="BoxProgress">
            <div className="Topic-Progress">
                <div className="Topic-L">Progress</div>
                <div className="Topic-icon">__ICON</div>
            </div>
            <div className="Required-Progress-component">
                
                <div  className="topic-name-req">Required</div>
                <div className="component-inside-req">
                    <BoxProgressInside name={"Frame"} Status={"NOT"}/>
                    <BoxProgressInside name={"Legs"} Status={"NOT"}/>
                    <BoxProgressInside name={"Flight Controller"} Status={"Done"}/>
                    <BoxProgressInside name={"Wings"} Status={"Done"}/>
                    <hr />
                </div>
            </div>
            <div className="Recommended-Progress-component">
                <div  className="topic-name-rec">Recommended</div>
                <div className="component-inside-rec">
                    <BoxProgressInside name={"Camera"} Status={"Done"}/>
                    <BoxProgressInside name={"Cam controller"} Status={"Done"}/>
                </div>
                <hr />

            </div>
            <div className="AddOn-Progress-component">
                <div  className="topic-name-AddOn">AddOn</div>
                <div className="component-inside-AddOn">
                    <BoxProgressInside name={"GPS"} Status={"NOT"}/>
                    <BoxProgressInside name={"SENSOR"} Status={"Done"}/>
                </div>

            </div>
        </div>
    </>
    )
  }
  