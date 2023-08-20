import React from 'react'
import './flotingdiv.css'

export const FlotingDiv = ({image ,text1,text2}  ) => {
  return (
    <div className='flotingDiv'>
        <img src={image} />
        <span>{text1} </span>
         &nbsp; <br/>
       <span>{text2}</span>
    </div>
  )
}
