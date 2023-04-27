import React from 'react'
import img1 from '../assets/Section_1.svg';
import img2 from '../assets/Section_1.1.svg';
import click from '../assets/Click.svg';
import dollar from '../assets/Dollar.svg';
import org from '../assets/Organization.svg';
import subImg from '../assets/Features-Section.svg';


import '../StyleSheets/Section1.css';


export default function Section1() {
  return (
   <div>
     <div className='Section1_mainContainer'>
        <div className='Section1_Content'>
            <h1>Send, Save and Track your <span className='money'>Money</span> with Ease!</h1>
            <p>From Transfering funds to saving and tracking your finances, Opay is the ultimate financial assistant</p>
            <button>Learn More</button>
        </div>
        <div className='image_Section'> 
        <img src={img1} alt="App Interface" className='section1_Img' id='img1'/>
        <img src={img2} alt="App Interface" className='section1_Img' id='img2'/>
        </div>
    </div>
    <div className='subSection'>
    <div id="overlay"></div> 
        <div className='noOverlay'>
        <span>
            <img src={dollar} alt="" />
            <p>Return On Investment</p>
        </span>
        <span>
        <img src={click} alt="" />
            <p>One Click Payment</p>
        </span>
        <span>
        <img src={org} alt="" />
            <p>Auto Organization</p>
        </span>
        </div>
    </div>
   </div>
  )
}
