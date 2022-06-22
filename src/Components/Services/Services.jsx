import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Kartikeya-2 (1).pdf';
import {themeContext} from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';

const Services = () => {
  
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
const transition = {duration: 1, type:'spring'}

  return (
    <div className='services' id='Services' >
       {/* Left Side */}

       <div className='awesome'> 
       <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
       <span>Services</span>

       <span>
       Lorem ispum is simply dummy text of printing lorem
       <br/>
       Ispum is simply dummy text of printing
       </span>
       
       <a href={Resume} download>
       <button className='button s-button'>Download CV</button>
       </a>

       <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}> </div>

       </div>

       {/* Right Side */}

       <div className='cards'>
        <motion.div 
        
        initial={{left: '30rem' }}
        whileInView= {{left: '20rem'}}
        transition={transition}
        
        
         style={{left: '20rem'}} >
            <Card 
            emoji = {HeartEmoji} 
            heading = {'Design'} 
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"} />
        </motion.div>
        {/* Second Card */}

        <motion.div 
        
        initial={{ left: '-6rem' }}
        whileInView= {{top: '12rem', left: '-0rem'}}
        transition={transition}
        
        
        style={{ top: '12rem', left: '-0rem' }} >
        <Card 
        emoji={Glasses}
        heading={"Developer"}
        detail={"Html, css, JavaScript, ReactJs,Sketch, Photoshop, Adobe, Adobe xd"}
        />

        </motion.div>

        {/* Third Card */}

        <motion.div 
        
        initial={{left: '22rem' }}
        whileInView= {{top: '19rem', left: '16rem'}}
        transition={transition}
        
        
         style={{ top: '19rem', left: '16rem' }} >
        <Card 
        emoji={Humble}
        heading={"UI/UX"}
        detail={"Lorem ispum dummy text are usually use in section where"}
        />

        </motion.div>

        <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>



       </div>

    </div>
  )
}

export default Services;
