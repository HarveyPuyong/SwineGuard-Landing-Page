import { useState, useEffect } from "react";
import Logo from "./../assets/icons/swineGuard-logo.png"
import "./../styles/header.css"


function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000)

  // Toggle navigation
  const toggleNav = () => {
    if(isMobile){
      setNavVisible((prev) => !prev);
    }
  };


  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 1000);
    if(window.innerWidth > 1000) setNavVisible(false)
  }
  

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  return(
    <header className={navVisible ? "when-show-nav" : "when-hide-nav"}>
      <div className={`logo ${navVisible ? "when-show-nav" : "when-hide-nav"}`}>
        <img src={Logo} alt={Logo} />
        <p className="label">Swine Guard</p>
      </div>
      <div className={`toggle-btn ${navVisible ? "hide-nav-icon" : "show-nav-icon"}`} onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav>
        <ul className={navVisible ? "show" : "hide"}>
          <a className="nav-link" href="#" smooth={true} duration={500}>Home</a>
          <a className="nav-link" href="#get-to-know-section" smooth={true} duration={500}>About Us</a>
          <a className="nav-link" href="#services-section" smooth={true} duration={500}>Services</a>
          <a className="nav-link" href="#contact-section" smooth={true} duration={500}>Contacts</a>
          <a className="nav-link" to="/login">Login</a>
        </ul>
      </nav>
    </header>
  )
}

export default Header