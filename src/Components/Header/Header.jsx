import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'
const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setmenuOpend]=useState(false);
  return (
    <div className='header'>
      

      <img className='logo' src={Logo} alt=""  />

     {
      (menuOpened===false && mobile===true)
      ?
      (<div
        style={{background: 'var(--appColor)', padding: '0.5rem', borderRadius:'5px'}}

        onClick={()=>setmenuOpend(true)}
      >
        <img src={Bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
      </div>
      ) 
      :
      (
        <ul className='header-menu'>
        <li>
          <Link
           onClick={()=>setmenuOpend(false)}
           activeClass="active"
           to='hero'
           spy={true}
           smooth={true}
          >Home</Link>
          </li>
        <li >
          <Link
          onClick={()=>setmenuOpend(false)}
          
          to='programs'
          spy={true}
          smooth={true}
          
          >Programs
          </Link>
          
          </li>
        <li >
          <Link
          onClick={()=>setmenuOpend(false)}
         
          to='Reasons'
          spy={true}
          smooth={true}
          >Why us</Link>
          </li>
        <li >
          <Link
          onClick={()=>setmenuOpend(false)}
         
          to='plans'
          spy={true}
          smooth={true}

          >Plans</Link>
          </li>
        <li >
          <Link
          onClick={()=>setmenuOpend(false)}
        
          to='testimonials'
          spy={true}
          smooth={true}
          >Testimonials</Link>
          </li>
      </ul>
      )
     
     }

      
    </div>
  )
}

export default Header
