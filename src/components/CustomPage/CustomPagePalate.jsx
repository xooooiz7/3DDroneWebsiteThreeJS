import './CustomPage.scss';
import { useCustomization } from '../../contexts/Customization';
import { Material } from 'three';
import { dataset_model } from './DatasetModel';
import { chairColors } from './DatasetModel';

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

    const ShowName = () => {
        console.log("LEGS => ",legs)
        console.log("Mererial =>" , meterial)
        console.log("dataset_model[slideNumber]" , dataset_model[slideNumber])
        for (let i = 0; i < chairColors.length; i++) {
            console.log(`Color: ${chairColors[i].color}, Name: ${chairColors[i].name}`);
          }
        
    }

    const findMaterialIndex = () => {
        const currentIndex = dataset_model.findIndex((item) => item.namesProp.includes(meterial));
        console.log("Material Index:", currentIndex);
    };
    return (
        <div className="ChooseColorScreen">
            <div className="ImagePropsPalate">
                <img src={dataset_imageProps} alt="" />
            </div>
            <div className="NamePropsPalate"><p>{objectName}</p></div>
            <div className="PricesPropsPalate"><p>{dataset_pricesProp}</p></div>
            <hr />
            <div className="ColorPropsPalate">
                <div className="titleColorPalate"><h4>ColorPalates</h4></div>
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
                    <button onClick={() => { handleClick(); ShowName(); findMaterialIndex()}}>
                        PREV
                    </button></div>
                <div className="next-btn-Palate"><button >NEXT</button></div>
            </div>
        </div>
    )
  }
  