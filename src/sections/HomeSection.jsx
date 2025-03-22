import VeterenaryOfficce from "./../assets/images/veterenary.png"
import Logo from "./../assets/icons/swineGuard-logo.png"
import FloatingPigImg from "./../assets/images/floating-pig.png"
import PigVaccineImg from "./../assets/images/Vaccine-Img-2.jpg"

function HomeSection(){
  return(
    <section id="home-section">
     <div className="banner">
          <img className="background-img" src={VeterenaryOfficce} alt="Veterinary Office" />
          <img src={FloatingPigImg} alt="floating-pig" className="floating-pig-img" />
          <div className="overlay-content">
            <img src={Logo} alt="Swine Guard" />
            <h1>Swine Guard</h1>
            <p>Join us to revolutionize swine farming...</p>
            <button>Join Now!</button>
          </div>
      </div>

      <div className="features-list">
        <div className="feature-box">
          <img className="background-img" src={PigVaccineImg} alt="Piglet Vaccination" />
          <div className="text-content">
            <h2>10 Days After Birth...</h2>
            <p>Early-stage care is essential...</p>
          </div>
        </div>
      </div>     
    </section>  
  )
}


export default HomeSection