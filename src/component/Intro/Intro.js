import React from 'react'
import './Intro.css'
import {FaGithub,FaTwitter, FaLinkedin} from 'react-icons/fa'
import vector1 from '../../images/Vector1.png'
import vector2 from '../../images/Vector2.png'
import boy from '../../images/boy.png'
import thumbup from '../../images/thumbup.png'
import Crown from '../../images/crown.png'
import glassesimoji from '../../images/glassesimoji.png'
import { FlotingDiv } from '../flotingdiv/FlotingDiv'
import {motion} from 'framer-motion'

export const Intro = () => {
  const transition={duration:3, type : 'spring'}
  
  return (
<div className='intro'>
    <div className='i-left'>
    <div className='i-name'>
        <span> Hy ! I Am </span>
        <span> Shailendra Yadav </span>
        <span> Fronted Developer with high level of 
        experience in web designing and development , 
        producting the Quality work </span>
    </div>
    <button className=' button i-button'> Hire me </button>
    <div className='icons'>
       <FaGithub  color='blue' /> <FaTwitter color='blue'/>
        <FaLinkedin color='blue'/>
    </div>
    </div>
   
    <div className='i-right'>
        <img src={vector1}/>
        <img src={vector2}/>
        <img src={boy}/>
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}  
        transition={transition}
        src={glassesimoji}/>
        
        <motion.div 
         initial={{top:'-4%',left:'74%'}}
         whileInView={{left:'68%'}}
         transition={transition}
        style={{top:'-4%',left:'68%'}}
        className='floting-div'>
          <FlotingDiv image={Crown} text1= 'Web'  text2='Developer'/>
        </motion.div>
        <motion.div 
        initial={{top:'18rem',left:'9rem'}}
         whileInView={{left:'0rem'}}
         transition={transition}
         style={{top:'18rem',left:'0rem'}}
         className='floting-div'>
        <FlotingDiv image={thumbup} text1='Best Design' text2='Award' />
       </motion.div>
       <div className='blur ' style={{background:'pink'}}>
       
       </div>
       <div className='blur' style={{background:"blue" ,top:"18rem", width:'21rem',
       height:'11rem', left:'-9rem'}}></div>
       </div>
       
       </div>
  )
}
