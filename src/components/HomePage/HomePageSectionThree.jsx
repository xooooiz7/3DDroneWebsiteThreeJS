// What we have done section
import { Scroll } from "@react-three/drei";
import { PcsSectionComponent } from "./HomePageSectionComponents";
import './HomePage.scss';
import { MainBoxComponent } from "./HomePageSectionComponents";

export const HomePageSectionThree = () => {
  return (
      <div className="HomePageContainerSectionThree">
        <div className="title-wwhd">
            <h1>What</h1>
            <h1 id="orange-title-wwhd">&nbsp;we</h1>
            <h1>&nbsp;have done?</h1>
        </div>
        <div className="Pcs-sectionThree">
            <PcsSectionComponent/>
        </div>
        <div className="main-box-components">
          <div className="box-components"><MainBoxComponent/></div>
          <div className="box-components"><MainBoxComponent/></div>
          <div className="box-components"><MainBoxComponent/></div>


        </div>
            
      </div>
  );
};

