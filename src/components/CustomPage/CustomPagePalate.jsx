import './CustomPage.scss';
import { useCustomization } from '../../contexts/Customization';
import { Material } from 'three';
import { dataset_model } from './DatasetModel';

export const FullPalateColor = () => {
    const {slideNumber ,keyNumber,meterial, legs ,objectName
         , chairColor ,cushionColor , isVisible, setIsVisible  } = useCustomization() 
  
    const dataset_drone = dataset_model[slideNumber]
    // imageProps pricesProp

    const dataset_imageProps = dataset_drone.imageProps[keyNumber]
    const dataset_pricesProp = dataset_drone.pricesProp[keyNumber]

    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    const ShowName = () => {
        console.log("LEGS => ",legs)
        console.log("Mererial =>" , meterial)
        console.log("dataset_model[slideNumber]" , dataset_model[slideNumber])
        
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
                    O O O O O
                    O O O O O
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
  