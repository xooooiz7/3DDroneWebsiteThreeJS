import '../HomePage/HomePage.scss' ; 
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <header className='nav-all'>
          <nav className="nav-bar-container">
            <div className="nav-bar-link">
              <Link to="/">Home</Link>
              <Link to="/CustomPage">Our Custom</Link>
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