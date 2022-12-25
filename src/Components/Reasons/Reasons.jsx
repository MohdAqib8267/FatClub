import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
   <div className="Reasons" id='Reasons'>
    <div className="blur r-blur"></div>
    {/* left section */}
    <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
       
    </div>
    <div className="right-r">
        <span>some reasons</span>

        <div>
            <span className='stroke-text'>Why</span>
            <span> Choose Us<span className='stroke-text'>?</span></span>
        </div>

    <div className='details-r'>
       <div>
            <img src={tick} alt=""></img>
            <span>over 140+ expert coachs</span>
           
        </div>
       <div>
            <img src={tick} alt=""></img>
            <span>Train smarter and faster than before</span>
            
        </div>
       <div>
            <img src={tick} alt=""></img>
            <span>1 free program for new members</span>
            
        </div>
       <div>
            <img src={tick} alt=""></img>
            <span>Reliable partners</span>
            
        </div>
    </div>
    <span style={
        {color: 'var(--gray)',
        fontWeight: 'bold'}
    }>OUR PARTNERS</span>
    <div className="partners">
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
    </div>
        
    </div>
   </div>
  )
}

export default Reasons
