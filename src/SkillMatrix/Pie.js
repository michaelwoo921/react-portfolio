import React from 'react'
import {VictoryPie, VictoryTheme} from 'victory'


  

const Pie = ({skills}) => {
    const data = skills.map(skill => ({x:1, y: skill.duration, label: ""}));

  return (
    <div className="pie">
  
        <VictoryPie 
        data={data}
        labels ={[""]}
        innerRadius={80}
        theme ={VictoryTheme.material}
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        />
              
    </div>

  )
}

export default Pie