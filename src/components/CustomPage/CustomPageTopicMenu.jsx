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
                <div className="Topic-L"><p>Progress</p></div>
                <div className="Topic-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg>
                </div>
            </div>
            <div className="Required-Progress-component">
                
                <div  className="topic-name-req">
                    <hr />
                    <p>Required</p>
                    <hr />
                </div>
                <div className="component-inside-req">
                    <BoxProgressInside name={"Frame"} Status={"o"}/>
                    <BoxProgressInside name={"Legs"} Status={"o"}/>
                    <BoxProgressInside name={"FC"} Status={"o"}/>
                    <BoxProgressInside name={"Wings"} Status={"o"}/>
                    <BoxProgressInside name={"Motors"} Status={"o"}/>
                    <BoxProgressInside name={"Battery"} Status={"o"}/>
                </div>
            </div>
            <div className="Recommended-Progress-component">
                <div  className="topic-name-rec">
                    <hr />
                    <p>Recommended</p>
                    <hr />
                </div>
                <div className="component-inside-rec">
                    <BoxProgressInside name={"Camera"} Status={"o"}/>
                    <BoxProgressInside name={"Cam Controller"} Status={"o"}/>
                </div>

            </div>
            <div className="AddOn-Progress-component">
                <div  className="topic-name-AddOn">
                    <hr />
                    <p>Add-On</p>
                    <hr />
                </div>
                <div className="component-inside-AddOn">
                    <BoxProgressInside name={"GPS"} Status={"o"}/>
                    <BoxProgressInside name={"SENSOR"} Status={"o"}/>
                </div>

            </div>
        </div>
    </>
    )
  }
  