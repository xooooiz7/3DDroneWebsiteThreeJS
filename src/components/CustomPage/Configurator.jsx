import { Material } from 'three';
import { useCustomization } from '../../contexts/Customization';
import './CustomPage.scss';


//หน้าสำหรับการวางโครง ตัว Wrap

const Configurator = () => {
    const {meterial , setMeterial} = useCustomization(); 

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
    </div>
} ; 

export default Configurator;