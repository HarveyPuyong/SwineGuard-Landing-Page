import VictoriaImg from './../assets/images/doctor3.jpg'
import LaylayImg from './../assets/images/doctor2.jpeg'
import DoeImg from './../assets/images/doctor1.png'
import ExpertCard from "../components/SwineExperts";


const swineExperts = [
  {
    id: 1,
    img: VictoriaImg,
    name: "Doc. Josue M. Victoria",
    role: "Provincial Veterinarian",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "doctor-image.jpg",
  },
  {
    id: 2,
    img: LaylayImg,
    name: "Mrs. Verona P. Laylay",
    role: "Agriculture Tech II",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "woman-doctor.jpg",
  },
  {
    id: 3,
    img: DoeImg,
    name: "Mr. John U. Doe",
    role: "Veterinarian Assistant",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "male-nurse.jpg",
  },
];


function SwineExpertsSection(){
  return(
    <section id="swine-experts-section">
      <h1 className="section-heading">Meet our Swine Experts</h1>
      <div className="expert-cards-container">
        {swineExperts.map((data, id)=> <ExpertCard key={id} data={data}/>)}
      </div>
    </section>
  )
}


export default SwineExpertsSection