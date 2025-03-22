import Header from "../components/Header";
import HomeSection from "../sections/HomeSection";
import KnowMoreSection from "../sections/KnowmoreSection";
import SwineExpertsSection from "../sections/SwineExpertsSection";
import ServicesSection from "../sections/SecvicesSection";
import GoalsSection from "../sections/GoalsSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";

function LandingPage(){
  return(
    <>
      <Header/>
      <HomeSection/>
      <KnowMoreSection/>
      <SwineExpertsSection/>
      <ServicesSection/>
      <GoalsSection/>
      <ContactSection/>
      <Footer/>
    </>
  
  )
}


export default LandingPage