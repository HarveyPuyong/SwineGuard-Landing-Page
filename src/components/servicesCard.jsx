function ServiceCard({data}){
  return(
    <div className="service-card">
      <img src={data.img} alt={data.img} className="service-img" />
      <h4 className="service-name">{data.name}</h4>
      <p className="service-details">{data.details}</p>
    </div>
  )
}


export default ServiceCard