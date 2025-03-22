import {Link} from "react-scroll";
import Logo from "./../assets/icons/swineGuard-logo.png"


function Header() {
  return(
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
        <p className="label">Swine Guard</p>
      </div>
      <div className="show-nav-icon">
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