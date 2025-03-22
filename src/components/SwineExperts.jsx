function ExpertCard({data}){
  return(
    <div className="swine-expert-card">
      <img className="expert-img" src={data.img} alt={data.img} />
      <h4 className="name">{data.name}</h4>
      <p className="expert-role text-green">{data.role}</p>
      <p className="expert-details">{data.details}</p>
    </div>
  )
} 


export default ExpertCard