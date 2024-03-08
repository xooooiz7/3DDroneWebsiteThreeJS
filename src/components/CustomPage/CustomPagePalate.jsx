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
        {/* ชื่อ => objectName
        ราคา => dataset_pricesProp */}
        <div className="ChooseColorScreen">
            <div className="ImagePropsPalate">
                <img src={dataset_imageProps} alt="" />
            </div>
            <div className="Name-Palate">
                <div className="name-insd"><p>wings 101</p></div>
                <div className="disc-insd"><p>xxxxxxxxxxxxxxxx</p></div>
                <div className='price-insd'><p>500 Baht</p></div>
            </div>
            
            
            <div className="ColorPropsPalate">
                <div className="titlePalate-size">
                    <hr />
                    <h4> Size</h4>
                    <hr />
                </div>
                <div className="size-btn">
                    <div className="container-size"><p>25 cm</p></div>
                    <div className="container-size"><p>50 cm</p></div>
                    <div className="container-size"><p>70 cm</p></div>
                </div>
                <div className="titlePalate">
                    <hr />
                    <h4> Color palette</h4>
                    <hr />
                </div>
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
            
            <div className="BtnPropsPalate">
                <div className="prev-btn-Palate" onClick={() => { handleClick() ; }}>
                    <button>
                        Back
                    </button></div>
                <div className="next-btn-Palate"><button>
                        Next
                    </button></div>
            </div>
        </div>
        </div>
    )
  }
  