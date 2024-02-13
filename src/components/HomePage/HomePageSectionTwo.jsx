// section About us
import { Scroll } from "@react-three/drei";
import { PcsSectionComponent } from "./HomePageSectionComponents";
import './HomePage.scss';

export const HomePageSectionTwo = () => {
  return (
      <div className="HomePageContainerSectionTwo">
        <div className="AboutUsMain">
            <h1>About</h1>
            <h1 id="text-orange-aboutUsMain">Us</h1>
        </div>
        <div className="AboutUsOne">
            <p>What we do?</p>
            <p>
                Share our passion for drones, artificial intelligence, and robotics and build your drone with us!
            </p>
        </div>
        <div className="AboutUsTwo">
        <p>What we do?</p>
            <p>
                Share our passion for drones, artificial intelligence, and robotics and build your drone with us!
            </p>
        </div>
      </div>
  );
};