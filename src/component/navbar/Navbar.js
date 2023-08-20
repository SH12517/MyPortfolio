import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'

function Navbar() {
  return (
<div className='n-wrapper .container'>
    <div className='n-left'>  
    <div className='n-name'> Shailendra 
    </div>
    <Toggle/>
    </div>
    <div className='n-right'> 
      <div className='n-list'>
        <ul>
        <Link spyThrottle={true} smooth={true} to= {Navbar} activeClass='activeClass' >
            <li>Home</li>
            </Link>
            <Link spyThrottle={true} smooth={true} to='Services' >
            <li>Services</li>
            </Link>
            <Link spyThrottle={true} smooth={true} to='Portfolio' >
            <li>Portfolio</li>
            </Link>
            <Link spyThrottle={true} smooth={true} to='Testimonial'>
            <li>Testimonial</li>
            </Link>
        </ul>
      </div>
      <Link spyThrottle={true} smooth={true} to='Contact'>
      <button className='button'> Cantact </button>
      </Link>
     </div>
     </div>
  )
}

export default Navbar