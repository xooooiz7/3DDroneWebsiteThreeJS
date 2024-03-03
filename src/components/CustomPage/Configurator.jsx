import { Material } from 'three';
import './CustomPage.scss';
import { SliderComponent } from './CustomPageMenu';
import { MenuTopicComponent } from './CustomPageTopicMenu';

//หน้าสำหรับการวางโครง UI interface ให้ user กด 

const Configurator = () => {
    return <div className="configurator">
       
        <SliderComponent/>
        <MenuTopicComponent/>
    </div>
} ; 

export default Configurator;