import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import {motion} from 'framer-motion';

const Testimonials = () => {

    const [selected,setSelected]=useState(0);
    const tLength=testimonialsData.length;

    const transition={type: 'spring', durantion: 2}

  return (
    <div className="testimonials">
      <div className="blur t-blur"></div>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What They</span>
            <span>Say About Us</span>
           
           <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={{...transition,duration:2}}
           >
            {testimonialsData[selected].review}
           </motion.span>
           <span>
                <span style={{color:'var(--orange)', fontWeight:'bold'}}>{testimonialsData[selected].name} </span>
                - {testimonialsData[selected].status}
           </span>
        </div>
        <div className="right-t">
            <motion.img 
            key={selected}
            initial={{opacity:0,x:100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={{...transition,duration:2}}
            
            src={testimonialsData[selected].image} alt="" />

            <motion.div
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{...transition, duration:1}}
            className='box1'>
                
            </motion.div>

            <motion.div
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{...transition, duration:2}}className='box2'>

            </motion.div>

            <div className="arrow">
                <img onClick={()=>{ selected===0 ? setSelected(tLength-1) : setSelected(selected-1)  }} src={leftArrow} alt="" />
                <img onClick={()=>{ selected===tLength-1 ? setSelected(0) : setSelected(selected+1) }} src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
