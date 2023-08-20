import React from 'react'
import './services.css'
import HeartEmoji from ".././images/heartemoji.png";
import Glasses from ".././images/glasses.png";
import Humble from '.././images/humble.png';
import Card  from '../component/card/Card';
import Resume from "../services/Resume.pdf"
import {motion, spring} from 'framer-motion'

function Services() {
  const transition = {duration:1 , motion: 'spring'}
  
    return (
    <div className='services' id='Services'>
        {/* left Side */}
        <div className='awesome'>
        <span>My Awesome </span>
        <span>services</span>
        <span>
            Lorem ispum is simply dummt text of printing of printing lorem
        <br /> ispum is simpley dummy text of printing 
        </span>
        <a href={Resume} download> 
        <button className=' button s-button'> Download CV </button>
        </a>
        <div className='blur s-blur'  style={{background:'#ABF1FF94'}} ></div>

        </div>
        {/* Right side */}
        <div className='cards'>
        <motion.div 
          initial={{left:'17rem'}}
         whileInView={{left:'26rem'}}
         transition={transition}
        style={{left:'25rem'}}>
        <Card 
             emoji ={HeartEmoji}
             heading = {'Design'}
            detail={'figma, Sketch, Photoshop, Adobe, Adobe-xd'} />
        </motion.div>
        <div style={{top:'12rem', left:'3rem'}}>
        <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={'Html, css, JavaScript,React,figma, Sketch, Photoshop, Adobe, Adobe-xd'}
        />

        </div>
        <motion.div 
          initial={{left:'32rem'}}
         whileInView={{left:'27rem'}}
         transition={transition}
        style={{top:'18rem', left:'27rem'}}>
        <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={'Lorem ispum text are usually use in section'}
        />

        </motion.div>
        
        </div>
     
    </div>
  )
}

export default Services