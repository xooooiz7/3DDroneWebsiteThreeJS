import { Scroll } from "@react-three/drei";
import '../App.scss';

export const Overlay = () => {
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

export const NavOverlay = () => {
  return (
      <header>
        <nav className="nav-bar-container">
          <div className="nav-bar-link">
            <a href="#">Home</a>
            <a href="#">Our Custom</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="nav-bar-logo">
            <a href="#">Logo A</a>
            <a href="#">Logo B</a>
          </div>
        </nav>
      </header>
  );
};