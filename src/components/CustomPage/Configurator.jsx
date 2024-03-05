import { Material } from 'three';
import './CustomPage.scss';
import { SliderComponent } from './CustomPageMenu';
import { MenuTopicComponent } from './CustomPageTopicMenu';
import ProgressBar from './CustomPageMenu';

//หน้าสำหรับการวางโครง UI interface ให้ user กด 

const Configurator = () => {
    return <div className="configurator">
       
        <SliderComponent/>
        <MenuTopicComponent/>
        <ProgressBar/>
    </div>
} ; 

export default Configurator;