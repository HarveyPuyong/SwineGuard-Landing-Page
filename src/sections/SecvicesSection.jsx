import IronSupplementationImg from './../assets/images/Vaccine-Img-2.jpg';
import DewormingImg from './../assets/images/Swine-Dewarm.jpg';
import ASFTestingImg from './../assets/images/Vaccine-Img-3.png';
import BloodTestingImg from './../assets/images/blood test.jpg';
import SwineHealthSurveillanceImg from './../assets/images/Swine-surviellance.jpeg';
import RabiesVaccinationImg from './../assets/images/Anti-rabies.jpg';
import PostpartumCareImg from './../assets/images/Swine Nursery.jpg';
import SurgicalCastrationImg from './../assets/images/Castration.jpg';
import ServiceCard from "../components/servicesCard"


const services = [
  {
    title: "Iron Supplementation",
    details: "Essential for piglets to prevent anemia, boost growth, and support their overall development.",
    img: IronSupplementationImg
  },
  {
    title: "Deworming & Parasite Control",
    details: "Ensuring the sow is free from internal and external parasites.",
    img: DewormingImg
  },
  {
    title: "ASF Testing",
    details: "Early detection of African Swine Fever to protect your herd and prevent outbreaks in your farm.",
    img: ASFTestingImg
  },
  {
    title: "Blood Testing",
    details: "A comprehensive health check to detect infections, deficiencies, and underlying diseases in your swine.",
    img: BloodTestingImg
  },
  {
    title: "Swine Health Surveillance",
    details: "Regular surveillance to track swine health, prevent disease spread, and ensure optimal farm productivity.",
    img: SwineHealthSurveillanceImg
  },
  {
    title: "Rabies Vaccination",
    details: "Protecting your pigs and other animals from rabies, ensuring farm safety and biosecurity.",
    img: RabiesVaccinationImg
  },
  {
    title: "Postpartum Care",
    details: "Ensuring the sow recovers well and can nurse her piglets properly.",
    img: PostpartumCareImg
  },
  {
    title: "Surgical Castration",
    details: "Prevent aggression and unwanted breeding, ensuring better meat quality and a healthier herd.",
    img: SurgicalCastrationImg
  }
];


function ServicesSection(){
  return(
    <section id="services-section"> 
      <h1 className="section-heading">Services We offer</h1>
      <div className="services-card-container d-grid">
        {services.map((data, index)=> <ServiceCard key={index} data={data}/>)}
      </div>
    </section>
  )
}


export default ServicesSection