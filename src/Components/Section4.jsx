import React from 'react'
import {RiAppleFill} from 'react-icons/ri';
import img from '../assets/WAYW-Section.svg';
import "../StyleSheets/Section4.css";

const style = {
  fontSize : "1.3rem",
  position: "absolute",
  bottom : "14px",
  marginLeft : "5px",
}


export default function Section4() {
  return (
    <div className='Section4_mainContainer'>
    
     <div className='Section4_Content'>
        <h1>What Are You <span className='money'>Waiting</span> For?</h1>
        <p>It has never been this east to transfer funds to your family or friends. With a simple tap between two phones with Opay app,you can send as much money as you wish without the usual high transaction fees</p>
        <div className='buttons'>
        <button className='regularButton'>Get the App</button>
        <button className='appleButton'>Get on AppStore <RiAppleFill style={style}></RiAppleFill> </button>
        </div>
    </div>
    <img src={img} alt="App Interface" className='section4_Img' />
</div>
  )
}
