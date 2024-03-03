import './CustomPage.scss';
import { useCustomization } from '../../contexts/Customization';
import { Material } from 'three';
import { dataset_model } from './DatasetModel';
import { chairColors } from './DatasetModel';
// import { slideNext } from './CustomPageMenu';

export const FullPalateColor = () => {
    const {slideNumber ,keyNumber,meterial, legs ,objectName , setChairColor
            ,setLegColor, chairColor ,cushionColor , isVisible, setIsVisible  } = useCustomization() 
  
    const dataset_drone = dataset_model[slideNumber]
    
    // imageProps pricesProp
    const dataset_imageProps = dataset_drone.imageProps[keyNumber]
    const dataset_pricesProp = dataset_drone.pricesProp[keyNumber]
    const dataset_colorsProp = dataset_drone.colorsProp

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const handleColorClick = (color) => {
        console.log(`Clicked color: ${color}`);
        if (slideNumber === 0 && keyNumber === 0) {
          setChairColor(color);
        }
        if (slideNumber === 1 && keyNumber === 0){
            setLegColor(color);
        }
      };

   

    return (
        <div className="Bg-colorScreen">

        <div className="ChooseColorScreen">
            <div className="ImagePropsPalate">
                <img src={dataset_imageProps} alt="" />
            </div>
            <div className="NamePropsPalate"><p>{objectName}</p></div>
            <div className="PricesPropsPalate"><p>{dataset_pricesProp}</p></div>
            <hr />
            <div className="ColorPropsPalate">
                <div className="titleColorPalate"><h4> Color</h4></div>
                <div className="Inside-colorPalate">
                {dataset_colorsProp.map((color, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: color }}
                            className="colorBox"
                            onClick={() => handleColorClick(color)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="SizePropsPalate">
                    <div className="size-InsidePalate">20 CM</div>
                    <div className="size-InsidePalate">30 CM</div>
                    <div className="size-InsidePalate">40 CM</div>
            </div>
            <div className="BtnPropsPalate">
                <div className="prev-btn-Palate">
                    <button onClick={() => { handleClick() ; }}>
                        Back
                    </button></div>
                <div className="next-btn-Palate"><button>
                        Next
                    </button></div>
            </div>
        </div></div>
    )
  }
  