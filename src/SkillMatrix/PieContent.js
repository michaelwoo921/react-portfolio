import React from 'react'

const PieContent = ({skills}) => {
    const colors = ['tomato', 'orange', 'gold', 'cyan', 'navy']
 
  return (
    <div className="skills">
        {skills.map((skill, index) => {
            return <div key={index} > <span id="skill-circle" style={{backgroundColor: colors[index]}}></span> <span className="skill-name"> {skill.name} </span> <span className="duration"> ({skill.duration} Months)</span>  </div>
        })}
        
       
    </div>
    
  )
}

export default PieContent