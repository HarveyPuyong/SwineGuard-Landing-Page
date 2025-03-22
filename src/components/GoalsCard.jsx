function GoalCard({data}){
  return(
    <div className="goal-card">
      <img src={data.icon} alt="" className="goal-icon" />
      <p className="goal-label">{data.label}</p>
    </div>
  )
}


export default GoalCard