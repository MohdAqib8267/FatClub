import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'
const Hero = () => {

  const transition={type:'spring', duration:3}
  return (
    <div className="hero">

      <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          {/* the best ad */}
          <div className="the-best-ad">
            
             <div></div>
             <div></div>
            <span>the best fitness Club</span>
          </div>

          {/* hero heading */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>In here we will help you to shape and build idead body and live up your life to full-fill</span>
            </div>
          </div>

          {/* figures */}
          <div className="figures">
            <div>
              <span className='circle'>+140</span>
              <span>expert coachs</span>
            </div>
            <div>
              <span className='circle'>+978</span>
              <span>members joined</span>
            </div>
            <div>
              <span className='circle'>+50</span>
              <span>fitness programs</span>
            </div>
          </div>

          {/* hero-buttons */}
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

      {/* Right side */}
        <div className="right-h">
            <button className="btn">Join Now</button>

            <motion.div
            initial={{right:"-1rem"}}
            whileInView={{right:"4rem"}}
            transition={transition}
            
            className="heart-rate">
              <img src={Heart} alt="" />
              <span>Heart Rate</span>
              <span>116 bpm</span>
            </motion.div>

            {/* hero images */}
            <img src={hero_image} className="hero-image" alt="" />
            <motion.img
            initial={{right:"10rem"}}
            whileInView={{right:"20rem"}}
            transition={transition}
            src={hero_image_back} className="hero-image-back" alt="" />

            {/* calories */}
            <motion.div 
             initial={{right:"37rem"}}
             whileInView={{right:"28rem"}}
             transition={transition}
            className="calories">
              <img src={Calories} alt="" />
              <div>
                <span>Calories Burned</span>
                <span>220 Kcal</span>
              </div>
              
            </motion.div>
        </div>
    </div>
  )
}

export default Hero

