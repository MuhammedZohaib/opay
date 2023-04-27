import React from 'react'
import img from '../assets/Opay-Logo.svg';
import "../StyleSheets/Footer.css";
import {BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai";
import {MdOutlineBusiness} from "react-icons/md";
import {MdConnectWithoutContact} from "react-icons/md";


const style = {
    fontSize: "1.2rem",
    color: "#fff"
}

export default function Footer() {
  return (
    <div className='footer_Container'>
            <img src={img} alt="Opay Logo" className='footerLogo' />
        <div className='subSection1'>
            <p className='typo1'>3114 St. Collins Road, Lancshire, GB</p>
            <p className='typo1'>All Banking Facilities in a GO</p>
        </div>
        <div className="subSection2">
            <h2>Quick Links</h2>
            <a href=""><AiFillHome style={style}></AiFillHome> Home</a>
            <a href=""><MdOutlineBusiness style={style}></MdOutlineBusiness> Business</a>
            <a href=""><MdConnectWithoutContact></MdConnectWithoutContact> Contact Us</a>
        </div>
        <div className="subSection3">
        <h2>Social Links</h2>
            <div className='icons'>
            <a href=""><BsFacebook style={style}></BsFacebook> Facebook</a>
            <a href=""><AiFillInstagram style={style}></AiFillInstagram> Instagram</a>
            <a href=""><AiFillTwitterSquare style={style}></AiFillTwitterSquare> Twitter</a>
            <a href="" id='linkedin'><AiFillLinkedin style={style}></AiFillLinkedin> Linkedin</a>
            </div>
        </div>
        <button className='footerButton'>Contact Us</button>
    </div>
  )
}
