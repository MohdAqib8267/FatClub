import React from 'react'
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import RightArrow from '../../assets/rightArrow.png'
const Plans = () => {
  return (
        <div className="plans-container">
            <div className="blur plan-blur1" > </div>
            <div className="blur plan-blur2" ></div>
            <div className="plans-header">
                <span className='stroke-text'>Ready to start</span>
                <span>Your Journer</span>
                <span className='stroke-text'>Now With Us</span>
            </div>

            {/* plans Card */}
            <div className="plans">
                
                {plansData.map((plan,i)=>
                    <div className="plan" key={i}>
                         {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature,i)=>
                            <div className="feature" >
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>     
                        )}
                    </div>

                    <div className="benefits">
                    <span>See More Benefits</span>
                    <img src={RightArrow} alt="" />
                   </div>

                   <div className="btn">Join now</div>
                    </div>
                  
                 )}
            </div>

        </div>
  )
}

export default Plans
