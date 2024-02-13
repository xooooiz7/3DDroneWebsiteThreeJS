import { Scroll } from "@react-three/drei";
import { PcsSectionComponent } from "./HomePageSectionComponents";
import './HomePage.scss';

export const HomePageSectionFour = () => {
  return (
      <div className="HomePageContainerSectionFour">
        <div className="line-1-sectionFour">
            <div className="line-1-left">
                <p>Company.com</p>
            </div>
            <div className="line-1-right">
                <p>About</p>
                <p>Team</p>
                <p>Prices</p>
                <p>Contacts</p>
            </div>
        </div>
        <hr className="line-section-four"/>
        <div className="line-2-sectionFour">
            <div className="line-2-box-1">
                <div className="box-top-1">
                    <p>PHONE & EMAIL</p>
                </div>
                <div className="box-down-1">
                    <p>099-999-9999</p>
                    <p>084-232-1233</p>
                </div>
            </div>
            <div className="line-2-box-2">
                <div className="box-top-1">
                    <p>ADDRESS</p>
                </div>
                <div className="box-down-1">
                    <p>Hatyai 154/452</p>
                    <p>Songkhla</p>
                    <p>Thailand 90001 </p>
                </div>
            </div>
            <div className="line-2-box-3">
                <div className="box-top-1">
                    <p>OUR COMPANY</p>
                </div>
                <div className="box-down-1">
                    <p>Share our passion for drones, </p>
                    <p>artificial intelligence, and robotics</p>
                    <p>and build your drone with us!</p>
                </div>
            </div>
        </div>
        <hr className="line-section-four"/>
        <div className="line-3-sectionFour">
                <div className="line-3-box-1">
                    <p>All rights reserved</p>
                </div>
                <div className="line-3-box-2">
                    <p>© 2024 Company</p>
                </div>
                <div className="line-3-box-3">
                    <p>Facebook   Discord   Instagram</p>
                </div>
            </div>
      </div>

  );
};

