import { Link } from "react-scroll"

function KnowMoreCard({data}){
  return(
    <div className="knowmore-card">
      <img src={data.icon} alt={data.icon} className="icon" />
      <h3 className="label">{data.label}</h3>
      <p className="details">&nbsp;&nbsp;&nbsp;{data.details}</p>
      <Link className="readmore-btn" to={data.sectionLink}>Read More</Link>
    </div>
  )
};


export default KnowMoreCard