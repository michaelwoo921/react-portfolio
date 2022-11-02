import React from 'react'
import Pie from './Pie';
import PieContent from './PieContent';

const Chart = ({chart}) => {
  return (
    <div  className="skill-matrix__chart">             
        <div className="skill-matrix__title">{chart.title}</div>
        <Pie skills ={chart.skills}/>
        <PieContent skills = {chart.skills}/>
    </div>
  )
}

export default Chart