import React, {Fragment} from 'react'
import Chart from './Chart';
import data from './data';

const SkillMatrix = () => {
  return (
    <Fragment>
         <div className="skill-matrix__header"> 
          Skill Matrix <span>Duration in months</span>
      </div>
      <div className="skill-matrix__charts">
        {data.map((chart,index) => {
          return (
            <Chart chart={chart} key={index}/>
          
          )
        })}
      </div>
    </Fragment>
  )
}

export default SkillMatrix