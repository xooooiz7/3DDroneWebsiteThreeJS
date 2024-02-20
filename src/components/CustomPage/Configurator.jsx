import { Material } from 'three';
import { chairColors, cushionColors, useCustomization } from '../../contexts/Customization';
import './CustomPage.scss';
import { SliderComponent } from './CustomPageSectionComponent';

//หน้าสำหรับการวางโครง UI interface ให้ user กด 

const Configurator = () => {
    const {meterial , setMeterial , legs , setLegs ,chairColor ,
           setChairColor,cushionColor , setCushionColor} = useCustomization(); 

    return <div className="configurator">
        <div className="configurator__section">
            <div className="configurator__section__title">
                Chair meterial
            </div>
            <div className="configurator__section__values">

                {/* ถ้า material เท่ากับ "leather" จะถูกเพิ่มคลาส "item--active" เข้าไป */}
                <div className={`item ${meterial === "leather" ? "item--active" : ""}`} onClick={() => setMeterial("leather")}>
                    <div className="item__label">
                        Leather
                    </div>
                </div>
                <div className={`item ${meterial === "fabric" ? "item--active" : ""}`} onClick={() => setMeterial("fabric")}>
                    <div className="item__label">
                        Fabric
                    </div>
                </div>

            </div>
        </div>

        {/* หน้าสำหรับการเลือกสี (setChairColor) */}
        <div className="configurator__section">
            <div className="configurator__section__title">
                Chair Colour
            </div>
            <div className="configurator__section__values">
            {/* Map ค่าจาก chairColor Array แล้วเอาค่าทั้งหมด มาทำเป็น interface */}
            
            { chairColors.map((item , index) => (
                <div key={index} className={`item ${item.color === chairColor.color ? "item--active" : ""}`} 
                onClick={() => setChairColor(item)}>
                <div className="item__dot" style={{
                    backgroundColor:item.color,
                }}/>
                <div className="item__label"> {item.name}</div>
            </div>
            ))
            }
            </div>
        </div>
        {/* หน้าสำหรับการเลือกสี (setChairColor 2) */}
        <div className="configurator__section">
            <div className="configurator__section__title">
                Cushion Colour
            </div>
            <div className="configurator__section__values">
            {/* Map ค่าจาก chairColor Array แล้วเอาค่าทั้งหมด มาทำเป็น interface */}
            
            { cushionColors.map((item , index) => (
                <div key={index} className={`item ${item.color === cushionColor.color ? "item--active" : ""}`} 
                onClick={() => setCushionColor(item)}>
                <div className="item__dot" style={{
                    backgroundColor:item.color,
                }}/>
                <div className="item__label"> {item.name}</div>
            </div>
            ))
            }
            </div>
        </div>

        {/* ปุ่มสำหรับการเปลี่ยนขา */}
        <div className="configurator__section">
            <div className="configurator__section__title">
                Legs
            </div>
            <div className="configurator__section__values">
                
                {/* ถ้า material เท่ากับ "leather" จะถูกเพิ่มคลาส "item--active" เข้าไป */}
                <div className={`item ${legs === 1 ? "item--active" : ""}`} onClick={() => setLegs(1)}>
                    <div className="item__label">
                        Legs 1
                    </div>
                </div>
                <div className={`item ${legs === 2 ? "item--active" : ""}`} onClick={() => setLegs(2)}>
                    <div className="item__label">
                        Legs 2
                    </div>
                </div>

            </div>
        </div>
        <SliderComponent/>

    </div>
} ; 

export default Configurator;