import React, {Fragment} from 'react'
import Chart from './Chart';
import data from './data';

const SkillMatrix = () => {
  return (
    <Fragment>
         <div className="skill-matrix"> 
          Skill Matrix <span> All durations represent Equivalency</span>
      </div>
      <div className="charts">
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