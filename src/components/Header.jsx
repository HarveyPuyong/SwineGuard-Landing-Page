import { Link } from "react-scroll";
import Logo from "./../assets/icons/swineGuard-logo.png"
import "./../styles/header.css"


function Header() {
  document.addEventListener('resize', ()=>{
    const headerHeight = document.querySelector('header').offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`
  });

  return(
    <header className="when-hide-nav">
      <div className="logo when-hide-nav">
        <img src={Logo} alt={Logo} />
        <p className="label">Swine Guard</p>
      </div>
      <div className="toggle-btn show-nav-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav>
        <ul>
          <a className="nav-link" href="#" smooth={true} duration={500}>Home</a>
          <a className="nav-link" href="#get-to-know-section" smooth={true} duration={500}>About Us</a>
          <a className="nav-link" href="#services-section" smooth={true} duration={500}>Services</a>
          <a className="nav-link" href="#contact-section" smooth={true} duration={500}>Contacts</a>
          <Link className="nav-link" to="/login">Login</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header