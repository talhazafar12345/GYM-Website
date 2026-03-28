

import { useState } from "react";
import { Link } from "react-router-dom";
function Hero1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="hero1-container">
      <div className="navBar">
        <div className="navImage">
          <img
            src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/themes/gymedge/assets/img/logo2.png"
            alt="Logo"
          />
        </div>
        <div className="navLinks">
          <Link to={"/"} className="link">Home</Link>
          <Link to={"/about-page"} className="link">About</Link>
          <Link to={"/service-page"}  className="link">Services</Link>
          <Link to={"/membership-page"}  className="link">Membership</Link>
        </div>
        <div className="navButton">
          <Link ><button>Join Gym</button></Link>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="navImages">
          <img
            src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/themes/gymedge/assets/img/logo2.png"
            alt="Logo"
          />
        </div>
        <div className="close-btn" onClick={toggleSidebar}>
          ✕
        </div>
        <Link to={"/"} className="side-link">
          Home
        </Link>
        <Link to={"/about-page"} className="side-link">
          About
        </Link>
        <Link to={"/service-page"}  className="side-link">
          Services
        </Link>
        <Link to={"/membership-page"} className="side-link">
          Fitness Packages
        </Link>
        <div className="side-buttons">
          <Link className="gymbtn"><button>Join Gym</button></Link>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}
export default Hero1;