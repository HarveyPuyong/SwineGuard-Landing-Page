import { Link } from "react-scroll"

function KnowMoreCard({data}){
  return(
    <div className="knowmore-card">
      <img src={data.icon} alt="" className="knowmore-icon" />
      <h3 className="knowmore-label">{data.label}</h3>
      <p className="know-more-details">{data.details}</p>
      <Link className="readmore-btn" to={data.sectionLink}>Read More</Link>
    </div>
  )
};


export default KnowMoreCard