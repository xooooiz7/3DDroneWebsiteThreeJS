import './HomePage.scss';

export const HomePageSectionNav = () => {
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
export const MainBoxComponent = () => {
  return(
    <div className="mainBoxContainer">
            <div className="detail-top"><p>Image</p></div>
            <div className="detail-down">
                <div className="text-down">
                  <div className="text-left-down">
                    <p>Projects Drone 101</p>
                    <p id='prices-text-left-down'>65,000 B</p>
                  </div>
                  <div className="text-right-down">
                      <p>Wings 54154</p>
                      <p>Camera 515</p>
                      <p>Model Y 22</p>
                  </div>
                </div>
                
                <div className="btn-down">
                    <button className="buy-now">Buy now</button>
                    <button className="View-more">View more</button>
                </div>
            </div>
        </div>
  )
}
export const PcsSectionComponent = () => {
  return (
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
  )
}