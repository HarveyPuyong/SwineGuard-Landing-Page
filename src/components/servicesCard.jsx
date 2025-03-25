function ServiceCard({data}){
  return(
    <div className="service-card">
      <div className="img-and-name">
        <img src={data.img} alt={data.img} className="img" />
        <h4 className="name">{data.name}</h4><br />
      </div>
        <p className="details">{data.details}</p>
    </div>
  )
}


export default ServiceCard