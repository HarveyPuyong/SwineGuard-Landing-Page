import VictoriaImg from './../assets/images/doctor3.jpg'
import LaylayImg from './../assets/images/doctor2.jpeg'
import DoeImg from './../assets/images/doctor1.png'
import sliderIcon from "./../assets/icons/slider-icon2.png"
import ExpertCard from "../components/SwineExperts";
import "./../styles/sectionsStyle/swineExpertsSection.css"


const swineExperts = [
  {
    id: 1,
    img: VictoriaImg,
    name: "Doc. Josue M. Victoria",
    role: "Provincial Veterinarian",
    details:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "doctor-image.jpg",
  },
  {
    id: 2,
    img: LaylayImg,
    name: "Mrs. Verona P. Laylay",
    role: "Agriculture Tech II",
    details:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "woman-doctor.jpg",
  },
  {
    id: 3,
    img: DoeImg,
    name: "Mr. John U. Doe",
    role: "Veterinarian Assistant",
    details:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "male-nurse.jpg",
  },
];


function SwineExpertsSection(){
  return(
    <section id="swine-experts-section">
      <h1 className="section-heading">Meet our Swine Experts</h1>
      <div className="expert-cards-container">
        <img className="slider-btn left"  src={sliderIcon} alt="slider-btn" />
        <img className="slider-btn right" src={sliderIcon} alt="slider-btn" />       
        <div className="scroller d-flex">
          {swineExperts.map((data, id)=> <ExpertCard key={id} data={data}/>)}
        </div>
      </div>
    </section>
  )
}


export default SwineExpertsSection