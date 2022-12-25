import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = (e) => {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_olsx4cw', 'template_nniya6i', form.current, 'cdyEUgpDwkcWjvZZg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join">
        <div className="join">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP </span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter Your Email Address' id="" />

                    <button className='btn btn-j' >Join now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Join
