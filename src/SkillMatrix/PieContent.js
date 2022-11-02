import React, {Fragment} from 'react'

const PieContent = ({skills}) => {
    const colors = ['tomato', 'orange', 'gold', 'cyan', 'navy']
 
  return (
    <div className="skill-matrix__contents">
        {skills.map((skill, index) => {
            return (
            <div key={index} className="skill-matrix__skill">{
              skill.name ? (
                <Fragment>
                 <span id="skill-matrix__circle" style={{backgroundColor: colors[index]}}></span> 
              <span className="skill-matrix__name"> {skill.name} </span> 
              <span className="skill-matrix__duration"> ({skill.duration} mo)</span>
              </Fragment>
               ): (<div>&nbsp;</div>)
            }
              
            </div>)
        })}
        
       
    </div>
    
  )
}

export default PieContent