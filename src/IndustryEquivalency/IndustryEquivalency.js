import React, { Fragment } from 'react';
import {VictoryPie, VictoryTheme} from 'victory'


const data = [
    {title: 'JavaScript', duration: 30, color: 'tomato'},
    {title: 'React/Redux', duration: 24, color: 'navy'},

   
    {title: 'Nodejs', duration: 24, color: 'orange'},
    {title: 'MongoDB', duration: 24, color: 'cyan'},
    {title: 'HTML/CSS', duration: 20, color: 'gold'},
   
]
const IndustryEquivalency = () => {
  return (
    <Fragment>
        <div className="industry"> 
          Industry Equivalency  <span className="month"> <span>Equivalency</span> in months</span>
      </div>

      <div className="ind-exp">{data.map(skill => {
         const radius = 100*skill.duration/24;
         const innerRadius =radius*0.95;

        return (
            <div className="ind-skill">
            <VictoryPie 
            labels ={[""]}
            data={[
                {x:1, y:1, label: ""}
              ]}
            radius={radius}
            innerRadius={innerRadius}
            theme ={VictoryTheme.material}
            colorScale={[`${skill.color}`]}
            />
            <div className="skill-duration"> {skill.duration}</div>
            
            <div className="skill-title"> {skill.title}</div>
            

            </div>
        )
      })}

      </div>

    </Fragment>
  )
}

export default IndustryEquivalency