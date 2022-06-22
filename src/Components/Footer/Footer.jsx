import React from 'react';
import "./Footer.css";
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className='footer'>
    <img src={Wave} alt='' style={{width: "100%"}} />
    <div className='f-content'>
    <span>kartikeya1k4p3@gmail.com</span>
    <div className='f-icons'>

    <a href='https://www.instagram.com/kartikeya_20198/?hl=en' target= '_blank' rel="noreferrer" >
        <Insta color='white' size="3rem" />
        </a>

        <a href='https://www.facebook.com/kartikey1K4P3' target= '_blank' rel="noreferrer" >
        <Facebook color='white' size="3rem" />
        </a>

        <a href='https://github.com/kartikeya1k4p3' target= '_blank' rel="noreferrer" >
        <Github color='white' size="3rem" />
        </a>
    </div>
        
    </div>
      
    </div>
  )
}

export default Footer;
