import { Scroll } from "@react-three/drei";
import '../.././App.scss';

export const HomePageSectionOne = () => {
  return (
    <Scroll html>
      <div className="first-container">
        <div className="welcome-text">
          <h1>Build Your</h1>
          <h1 id="welcome-text-custom">Custom</h1>
          <h1>Drone</h1>
        </div>
        <div className="container-discription">
          <div className="discription-text">
            <h4>Make your own Drone with Us !!</h4>
          </div>
        </div>
        
        <div className="button-main">
          <button className="make-your-own-btn">
            <p>Make Your Own</p>
          </button>
          <button className="our-product-btn">
            <p>Our Product</p>
          </button>
        </div>
        <div className="main-container-Pcs">
          <div className="container-Pcs">
            <div className="number-Pcs"><h1>3 Pcs</h1></div>
            <div className="discription-Pcs">
              <p>Custom</p>
              <p>Drone</p>
            </div>
          </div>
          <div className="line-str"></div>
          <div className="container-Pcs">
            <div className="number-Pcs"><h1>6 Pcs</h1></div>
            <div className="discription-Pcs">
              <p>Our's</p>
              <p>Drone</p>
            </div>
          </div>
          <div className="line-str"></div>
          <div className="container-Pcs">
            <div className="number-Pcs"><h1>2 Pcs</h1></div>
            <div className="discription-Pcs">
              <p>Fixed</p>
              <p>Drone</p>
            </div>
          </div>
        </div>
        
      </div>
    </Scroll>
  );
};

