import React from 'react'
import'./work.css'
import Upwork from '../../images/Upwork.png'
import Fiverr from '../../images/fiverr.png'
import Amazon from '../../images/amazon.png'
import Shopify from '../../images/Shopify.png'
import facebook from '../../images/Facebook.png';
import {motion} from 'framer-motion'

export const Work = () => {
  const transition = {transition:2, motion:''} 
  return (
    <div className='work'>
          {/* left Side */}
          <div className='awesome'>
        <span> Work for All These</span>
        <span>Brand & clients</span>
        <span>
            Lorem ispum is simply dummt text of printing of printing lorem
        <br/> 
        ispum is simpley dummy text of printing
        <br/> 
        ispum is simpley dummy text of printing
        <br/>
        Lorem ispum is simply dummt text of printing of printing lorem
        </span>
        
        <button className=' button s-button'> Hire me </button>
       
        <div className='blur s-blur'  style={{background:'#ABF1FF94'}} ></div>

        </div>
        {/* Right side */}
        <div className='w-right'>
        <motion.div 
           initial={{rotate:45}}
           whileInView={{rotate:0}}
           viewport={{margin:'-40px'}}
           transition={{duration:3.5, type:'spring'}}
           className='w-mainCircle'>
        <div  className='w-secCircle'>
        <img src={Upwork} alt=''/>
        </div>
        <div  className='w-secCircle'>
        <img src={Fiverr} alt=''/>
        </div>
        <div  className='w-secCircle'>
        <img src={Amazon} alt=''/>
        </div>        
        <div className='w-secCircle'>
        <img src={Shopify} alt=''/>
        </div>
        <div  className='w-secCircle'>
        <img src={facebook} alt=''/>
        </div>
        </motion.div>
        <div className='w-backcircle bluecircle'> </div>
        <div className='w-backcircle yellowcircle'> </div>
        </div>
    </div>
  )
}
