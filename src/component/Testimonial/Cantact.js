import React, { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Cantact() {
    const form = useRef();
    const [done, setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hjnggj9', 'template_30xt57k', form.current, 'hxYeyOLgcvEtx4ytj')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  
    return (
    <div className='form-cantact' id='Contact'>
    <div className="w-left">
    <div className='awesome'>
    <span>
      Get in touch
    </span>
    <span>
      Contact Me
    </span>
    <div className='blur s-blur' style={{background:"#ABF1FF94"}}>

    </div>
   </div>
    </div>
    <div className='c-right'>
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='user_name' className = "user" placeholder='Name'/> <br/>
      <input type='text' name='user_email' className = "user" placeholder='Email'/><br/>
      <textarea name='message' className='user' placeholder='Message'/><br/>
      <input type='submit' value="send" className='button'/>
      <span>{done && "Thanks for Cantact me Email send Sucessfull "}</span>
      <div className='blur c-blur' style={{background:'purple'}}>

      </div>
  </form>

    </div>  
  </div>
)
}

export default Cantact
