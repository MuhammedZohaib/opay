import React from 'react';
import img from '../assets/Section_2.svg';
import "../StyleSheets/Section3.css";

export default function Section3() {
  return (
    <div className='Section3_mainContainer'>
        <img src={img} alt="App Interface" className='section3_Img' />
        
         <div className='Section3_Content'>
            <h1>Receive <span className='money'>Money</span></h1>
            <p>It has never been this east to transfer funds to your family or friends. With a simple tap between two phones with Opay app,you can send as much money as you wish without the usual high transaction fees</p>
            <button>Get the App</button>
        </div>
    </div>
  )
}

