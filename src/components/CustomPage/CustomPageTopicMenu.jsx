// SliderInterfaceComponent

import './CustomPage.scss';
import React, { useEffect } from 'react';
import { BoxProgressInside } from './CustomPageMenu';
import './CustomPage.scss';
import { cardTitles } from './DatasetModel';
import { useCustomization } from '../../contexts/Customization';
import { useState } from 'react';

export const MenuTopicComponent = () => {

    const {slideNumber ,keyNumber ,doneCount ,setDoneCount } = useCustomization() ;
    const [completedSlides, setCompletedSlides] = useState([]); 
    

    const renderStatus = (index) => {
        if (completedSlides.includes(index)) {
            return "Done"; 
        } else if (index === slideNumber) {
            setCompletedSlides(prevState => [...prevState, slideNumber]);
            return "Done"; 
        } else {
            return "o"; 
        }
    };

    useEffect(() => {
        let count = 0;
        for (let i = 0; i <= 5; i++) {
            if (renderStatus(i) === "Done") {
                count+= 16.67;
            }
        }
        setDoneCount(count);
    }, [slideNumber, completedSlides]);

    console.log("Count =", doneCount);

    return (
      <>
        <div className='Undo-Container'>
            <div className="und-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </div>
            <div className="fwd-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </div>
        </div>
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
                    <BoxProgressInside name={cardTitles[0]} Status={renderStatus(0)}/>
                    <BoxProgressInside name={cardTitles[1]} Status={renderStatus(1)}/>
                    <BoxProgressInside name={cardTitles[2]} Status={renderStatus(2)}/>
                    <BoxProgressInside name={cardTitles[3]} Status={renderStatus(3)}/>
                    <BoxProgressInside name={cardTitles[4]} Status={renderStatus(4)}/>
                    <BoxProgressInside name={cardTitles[5]} Status={renderStatus(5)}/>

                </div>
            </div>
            <div className="Recommended-Progress-component">
                <div  className="topic-name-rec">
                    <hr />
                    <p>Recommended</p>
                    <hr />
                </div>
                <div className="component-inside-rec">
                    <BoxProgressInside name={cardTitles[6]} Status={renderStatus(6)}/>
                    <BoxProgressInside name={cardTitles[7]} Status={renderStatus(7)}/>
                </div>
            </div>
            <div className="AddOn-Progress-component">
                <div  className="topic-name-AddOn">
                    <hr />
                    <p>Add-On</p>
                    <hr />
                </div>
                <div className="component-inside-AddOn">
                    <BoxProgressInside name={cardTitles[8]} Status={renderStatus(8)}/>
                    <BoxProgressInside name={cardTitles[9]} Status={renderStatus(9)}/>
                </div>

            </div>
            
        </div>
        
        <div className="clear-all-container">
            <div className="clear-all-btn">
                <button>Clear-All</button>
                <div className='trash-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </div>
            </div>
        </div>
    </>
    )

}

