import React from 'react'
import  './footer.css'
import Wave from '../../images/wave.png'
import {ImGoogle} from 'react-icons/im'
import {ImInstagram} from 'react-icons/im'
import {ImWhatsapp} from 'react-icons/im'
function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} alt='' style={{width:"100%", height:'50vh'}}/>
        <div className='f-content'>
        <span>shailendraydv1@gmail.com</span>
        <div className='f-icons'>
        <ImGoogle/>
        <ImInstagram/>
        <ImWhatsapp/>
        </div>
      </div>
    </div>
  )
}

export default Footer