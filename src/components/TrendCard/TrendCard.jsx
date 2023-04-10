import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../Data/TrendData'
import { v4 as uuidv4 } from 'uuid'


const TrendCard = () => {
  return (
    <div className='TrendCard'>
      <h3>Trends for you</h3>

      {TrendData.map((trend)=> {
        return(
          <div key={uuidv4()} className='trend'>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        )
      })}

    </div>    
  )
}

export default TrendCard
