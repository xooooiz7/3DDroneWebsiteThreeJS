import { Material } from 'three';
import './CustomPage.scss';
import { SliderComponent } from './CustomPageMenu';

//หน้าสำหรับการวางโครง UI interface ให้ user กด 

const Configurator = () => {
    return <div className="configurator">
       
        <SliderComponent/>

    </div>
} ; 

export default Configurator;