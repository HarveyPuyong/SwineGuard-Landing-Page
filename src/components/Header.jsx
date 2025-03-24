import {Link} from "react-scroll";
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
          <Link className="nav-link" to="home-section" smooth={true} duration={500}>Home</Link>
          <Link className="nav-link" to="about-section" smooth={true} duration={500}>About Us</Link>
          <Link className="nav-link" to="services-section" smooth={true} duration={500}>Services</Link>
          <Link className="nav-link" to="contacts-section" smooth={true} duration={500}>Contacts</Link>
          <Link className="nav-link" to="/login">Login</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header